# Installation

`npm i git+https://github.com/meetmangukiya/node-yahoo-live-quotes`

# Example

```js
const { getQuotesFor } = require('yahoo-live-quotes');

getQuotesFor(['AAPL', 'BTC-USD', 'BTC-EUR'], console.log);
```

# What the data looks like now

```js
{
  id: 'BTC-USD',
  price: 8332.77734375,
  time: Long { low: -583351928, high: 367, unsigned: false },
  currency: 'USD',
  exchange: 'CCC',
  quoteType: 41,
  marketHours: 1,
  changePercent: -1.3922646045684814,
  dayVolume: Long { low: -259334144, high: 4, unsigned: false },
  dayHigh: 8450.4296875,
  dayLow: 8296.501953125,
  change: -117.65234375,
  shortName: 'Bitcoin USD',
  priceHint: Long { low: 2, high: 0, unsigned: false },
  vol_24hr: Long { low: -259334144, high: 4, unsigned: false },
  volAllCurrencies: Long { low: -259334144, high: 4, unsigned: false },
  fromcurrency: 'BTC',
  lastMarket: 'CoinMarketCap',
  circulatingSupply: 18181100,
  marketcap: 151499047000
}
```
