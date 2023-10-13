import express, { Request, Response } from 'express';
import { WebSocket } from 'ws';
import * as dotenv from 'dotenv';
import globalPriceRoutesWSRoutes from './routes/globalPriceWSRoutes';


dotenv.config();

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const exchangeRoutes = require("./routes/exchangeRoutes");
const globalPriceRoutes = require("./routes/globalPriceRoutes");

const orderBookUpdates: any[] = [];

const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth');

ws.on('message', (data: string) => {
    const message = JSON.parse(data);
    orderBookUpdates.push(message);

    if (orderBookUpdates.length > 100) {
        orderBookUpdates.shift();
    }

    io.emit('orderBookUpdates', orderBookUpdates);
});

//Middleware
app.use(express.urlencoded({ extended: true }));
//and Routes & Logic    
app.get("/api", (req, res) => {
    res.json(["Global Price Index API"]);
});
app.use("/api/exchanges", exchangeRoutes);
app.use("/api/global-price-index", globalPriceRoutes);
app.use('/api/global-price-index-ws', globalPriceRoutesWSRoutes(orderBookUpdates));


//404
app.use((req: Request, res: Response) => {
    res.status(404).send("No such EndPoint !");
});

app.listen(process.env.PORT as string, () => {
    console.log("Listening to port " + process.env.PORT);
});

io.on('connection', (socket: any) => {
    socket.emit('orderBookUpdates', orderBookUpdates);
});
