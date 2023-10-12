import express from 'express';

const exchangeController = require("../controllers/exchangeController");

const router = express.Router();

//GET
router.get("/all", exchangeController.get_exchanges);
router.get("/:id", exchangeController.get_exchange);

module.exports = router;