import { extractAsksAndBids } from '../utils/orderbookFormatting';

export class GlobalPriceService {
    calculateMidPrice(orderbookData: any[]): number | null {
        const formattedOrderbook: any = extractAsksAndBids(orderbookData);

        if (formattedOrderbook.bids.length > 0 && formattedOrderbook.asks.length > 0) {
            const maxBidPrice = Math.max(...formattedOrderbook.bids);
            const minAskPrice = Math.min(...formattedOrderbook.asks);

            return (maxBidPrice + minAskPrice) / 2;
        }
        return null;
    }

    async calculateGlobalPriceIndex(midPrices: (number | null)[]): Promise<number> {
        const totalMidPrice = midPrices.reduce((sum, midPrice) => {
            if (midPrice !== null) {
                if (sum !== null) {
                    return sum + midPrice;
                } else {
                    return midPrice;
                }
            }
            return sum;
        }, 0 as number | null);

        if (totalMidPrice === null) {
            return 0;
        }

        const globalPriceIndex = midPrices.length > 0 ? totalMidPrice / midPrices.length : 0;
        return globalPriceIndex;
    }
}
