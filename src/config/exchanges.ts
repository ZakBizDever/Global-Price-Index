export interface ExchangeConfig {
    apiURI: string;
    implementedWebSocket: boolean;
}

export const exchanges: Record<string, ExchangeConfig> = {
    binance: {
        apiURI: 'https://api.binance.com/api/v3/depth?limit=10&symbol=BTCUSDT',
        implementedWebSocket: true
    },
    kraken: {
        apiURI: 'https://api.kraken.com/0/public/Depth?pair=BTCUSDT',
        implementedWebSocket: false
    },
    huobi: {
        apiURI: 'https://api.huobi.pro/market/depth?symbol=btcusdt&type=step0',
        implementedWebSocket: false
    },
    // More exchanges can be added as per need
};
