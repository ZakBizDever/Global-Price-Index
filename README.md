# Global Price Index API

The Global Price Index API provides access to real-time global price data for the BTC/USDT trading pair from various exchanges. The API computes a global price index by averaging the mid-prices from multiple exchanges.

## V.1 Supported exchanges

- **Binance**
- **Kraken**
- **Huobi**
- Other exchanges can be added under "/config/exchanges.ts".

## API Server Config

A .env file should be configured simillar to the .env.example file structure.

## Endpoints

### Get Global Price Index

- **URL:** `/api/global-price-index/:symbol`
- **Method:** `GET`
- **Description:** Retrieve the global price index for the BTC/USDT trading pair, computed from multiple exchanges.
- **Response:**
  - `200 OK` - Successful response with the global price index.
  - `400 Bad Request` - Unable to calculate the global price index.

### Get Global Price Index using WebSocket

- **URL:** `/api/global-price-index-ws/:symbol`
- **Method:** `GET`
- **Description:** Retrieve the global price index for the BTC/USDT trading pair, computed from multiple exchanges (while Binance Orderbook is extracted via WebSocket).
- **Response:**
  - `200 OK` - Successful response with the global price index.
  - `400 Bad Request` - Unable to calculate the global price index.

### List supported Exchanges

- **URL:** `/api/exchanges/all`
- **Method:** `GET`
- **Description:** List all supported exchanges, from where orderbook data is extracted.
- **Response:**
  - `200 OK` - Successful response with the list of supported exchanges.
  - `400 Not Found` - No exchanges are configured.

### List details of specific Exchange

- **URL:** `/api/exchanges/:exchange`
- **Method:** `GET`
- **Description:** List all supported exchanges, from where orderbook data is extracted.
- **Response:**
  - `200 OK` - Successful response with the details of specified exchanges.
  - `400 Not Found` - No exchange with such name found.

## Authentication

Authentication is NOT required for accessing these endpoints.

## Error Handling

The GPI API returns appropriate HTTP status codes along with error messages in JSON format to help you identify and resolve any issues.
