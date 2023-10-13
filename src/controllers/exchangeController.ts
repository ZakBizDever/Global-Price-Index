import { Request, Response, exchanges } from '../utils/commonImports';

const get_exchange = (req: Request, res: Response) => {
    const { name } = req.params;

    if (exchanges[name]) {
        const apiURI = exchanges[name].apiURI;
        res.status(200).json(apiURI);
    } else {
        res.status(404).json({ error: 'Exchange not found' });
    }
};

const get_exchanges = (req: Request, res: Response) => {
    const exchangeNames = Object.keys(exchanges);

    if (exchangeNames.length === 0) {
        res.status(404).json({ error: 'No Exchange found' });
    } else {
        const exchangeList: { name: string; apiuRI: string }[] = [];

        for (const exchangeName in exchanges) {
            if (exchanges.hasOwnProperty(exchangeName)) {
                const exchangeConfig = exchanges[exchangeName];
                exchangeList.push({
                    name: exchangeName,
                    apiuRI: exchangeConfig.apiURI,
                });
            }
        }

        res.status(200).json(exchangeList);
    }
};

module.exports = {
    get_exchange,
    get_exchanges,
};
