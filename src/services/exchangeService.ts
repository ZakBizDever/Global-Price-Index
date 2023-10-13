import axios from 'axios';
import { ExchangeConfig } from '../config/exchanges';

export class ExchangeService {
    private exchangeConfig: ExchangeConfig;

    constructor(config: ExchangeConfig) {
        this.exchangeConfig = config;
    }

    async fetchOrderBook(pair: string) {
        const { apiURI } = this.exchangeConfig;

        try {
            const response = await axios.get(apiURI, {});

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Failed to fetch order book data from the exchange: ${response.status}`);
            }
        } catch (error: any) {
            throw new Error(`Failed to fetch order book data: ${error.message}`);
        }
    }
}
