import axios from 'axios';

export const getChartData = async (symbol) => {
  const lowercasedSymbol = symbol.toLowerCase().trim();

  const { data } = await axios.get(
    `https://cloud.iexapis.com/stable/stock/${lowercasedSymbol}/intraday-prices?token=${process.env.REACT_APP_IEX_API_TOKEN}`
  );

  return data;
};
/**
 * average: 108.652
close: 108.5
date: "2020-09-25"
high: 108.9
label: "09:30 AM"
low: 108.44
minute: "09:30"
notional: 449928.39
numberOfTrades: 38
open: 108.46
volume: 4141
 */
