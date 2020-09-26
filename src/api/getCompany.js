import axios from 'axios';

export const getCompany = async (symbol) => {
  const lowercasedSymbol = symbol.toLowerCase().trim();

  const { data } = await axios.get(
    `https://cloud.iexapis.com/stable/stock/${lowercasedSymbol}/company?token=${process.env.REACT_APP_IEX_API_TOKEN}`
  );
  return data;
};
