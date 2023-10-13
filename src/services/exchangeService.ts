import axios from 'axios';
import { ExchangeConfig } from '../config/exchanges';

export class ExchangeService {
    private exchangeConfig: ExchangeConfig;

    constructor(config: ExchangeConfig) {
        this.exchangeConfig = config;
    }

    async fetchOrderBook(pair: string, useWS: boolean = false) {
        const { apiURI, implementedWebSocket } = this.exchangeConfig;

        try {
            if (useWS && implementedWebSocket === true) {
                return 'none';
            }

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
