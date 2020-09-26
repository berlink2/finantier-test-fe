import axios from 'axios';

export const getChartData = async (symbol) => {
  const lowercasedSymbol = symbol.toLowerCase().trim();

  const { data } = await axios.get(
    `https://cloud.iexapis.com/stable/stock/${lowercasedSymbol}/intraday-prices?token=${process.env.REACT_APP_IEX_API_TOKEN}`
  );

  return data;
};
