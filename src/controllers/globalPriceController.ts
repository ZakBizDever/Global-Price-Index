import { Request, Response } from 'express';
import { ExchangeService } from '../services/exchangeService';
import { GlobalPriceService } from '../services/globalPriceService';
import { exchanges, ExchangeConfig } from '../config/exchanges';

const exchangeConfigs: ExchangeConfig[] = Object.entries(exchanges).map(([exchangeName, config]) => ({
    exchangeName,
    ...config,
}));

class GlobalPriceController {
    private exchangeServices: ExchangeService[];
    private globalPriceService: GlobalPriceService;

    constructor() {
        this.exchangeServices = exchangeConfigs.map((config) => new ExchangeService(config));

        this.globalPriceService = new GlobalPriceService();
    }

    get_global_price_index = async (req: Request, res: Response) => {
        try {
            const { symbol } = req.params;
            const midPrices: (number | null)[] = [];

            for (const exchangeService of this.exchangeServices) {
                const orderBookData = await exchangeService.fetchOrderBook(symbol);
                const midPrice = this.globalPriceService.calculateMidPrice(orderBookData);

                midPrices.push(midPrice);
            }

            const globalPriceIndex = await this.globalPriceService.calculateGlobalPriceIndex(midPrices);

            if (globalPriceIndex !== null) {
                res.status(200).json({ symbol, globalPriceIndex });
            } else {
                res.status(400).json({ error: 'Unable to calculate global price index' });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    };

    get_mid_price = (req: Request, res: Response) => {
        res.json({ message: 'Mid-Price' });
    };
}

export default GlobalPriceController;
