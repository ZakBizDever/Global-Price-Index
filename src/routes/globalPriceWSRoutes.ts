import { Router, GlobalPriceController } from '../utils/commonImports';

const router = Router();
const globalPriceController = new GlobalPriceController();

const globalPriceRoutesWSRoutes = (orderBookUpdates: any[]) => {
    router.get('/:symbol', (req, res) => {
        globalPriceController.get_global_price_index_ws(req, res, orderBookUpdates)
    });

    return router;
};

export default globalPriceRoutesWSRoutes;
