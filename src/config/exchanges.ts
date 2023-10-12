export interface ExchangeConfig {
    apiURI: string;
}

export const exchanges: Record<string, ExchangeConfig> = {
    binance: {
        apiURI: 'https://api.binance.com/api/v3/depth?limit=10&symbol=BTCUSDT',
    },
    kraken: {
        apiURI: 'https://api.kraken.com/0/public/Depth?pair=BTCUSDT',
    },
    huobi: {
        apiURI: 'https://api.huobi.pro/market/depth?symbol=btcusdt&type=step0',
    },
    // More exchanges can be added as per need
};
