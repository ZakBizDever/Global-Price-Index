import { Request, Response } from 'express';

const get_exchange = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(["Exchange details"]);
};

const get_exchanges = (req: Request, res: Response) => {
    res.json(["List of exchanges"]);
};

module.exports = {
    get_exchange,
    get_exchanges,
};
