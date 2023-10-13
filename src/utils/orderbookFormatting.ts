export function extractAsksAndBids(obj: any, result: any = {}): any[] {
    let asks = [];
    let bids = [];

    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            for (const item of obj) {
                extractAsksAndBids(item, result);
            }
        } else {
            for (const key in obj) {
                if (key === 'asks' || key === 'a') {
                    asks = obj[key];
                    const formattedAsks = asks.map((a: any) => Number(a[0]));

                    result.asks = formattedAsks;
                }
                if (key === 'bids' || key === 'b') {
                    bids = obj[key];
                    const formattedBids = bids.map((b: any) => Number(b[0]));

                    result.bids = formattedBids;
                }
                extractAsksAndBids(obj[key], result);
            }
        }
    }
    return result;
}
