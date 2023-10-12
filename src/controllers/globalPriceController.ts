import { Request, Response } from 'express';

const get_global_price_index = (req: Request, res: Response) => {
    const { symbol } = req.params;
    res.json(["Global Price Index for BTC/USDt"]);
};

const get_mid_price = (req: Request, res: Response) => {
    res.json(["Mid-Price"]);
};

module.exports = {
    get_global_price_index,
    get_mid_price,
};
