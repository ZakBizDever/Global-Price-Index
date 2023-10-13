import { express } from '../utils/commonImports';

const exchangeController = require("../controllers/exchangeController");

const router = express.Router();

//GET
router.get("/all", exchangeController.get_exchanges);
router.get("/:name", exchangeController.get_exchange);

module.exports = router;
