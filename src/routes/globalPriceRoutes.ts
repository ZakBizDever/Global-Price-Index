import express from 'express';
import GlobalPriceController from '../controllers/globalPriceController';

const router = express.Router();
const globalPriceController = new GlobalPriceController();

//GET
router.get("/mid-price/:exchange/:symbol", globalPriceController.get_mid_price);
router.get("/:symbol", globalPriceController.get_global_price_index);

module.exports = router;
