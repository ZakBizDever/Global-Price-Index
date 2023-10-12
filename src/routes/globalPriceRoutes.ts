import express from 'express';

const globalPriceController = require("../controllers/globalPriceController");

const router = express.Router();

//GET
router.get("/mid-price", globalPriceController.get_mid_price);
router.get("/:symbol", globalPriceController.get_global_price_index);

module.exports = router;
