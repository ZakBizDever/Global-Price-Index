import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const exchangeRoutes = require("./routes/exchangeRoutes");
const globalPriceRoutes = require("./routes/globalPriceRoutes");

//Middleware
app.use(express.urlencoded({ extended: true }));
//Routes & Logic    
app.get("/api", (req, res) => {
    res.json(["Global Price Index API"]);
});
app.use("/api/exchanges", exchangeRoutes);
app.use("/api/global-price-index", globalPriceRoutes);

//404
app.use((req: Request, res: Response) => {
    res.status(404).send("No such EndPoint !");
});

app.listen(process.env.PORT as string, () => {
    console.log("Listening to port " + process.env.PORT);
});
