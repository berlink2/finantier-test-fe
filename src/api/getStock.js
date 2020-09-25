import axios from 'axios';

export const getStock = async (symbol) =>{
    const lowercasedSymbol = symbol.toLowerCase();

    const  { data } = await axios.get(`https://cloud.iexapis.com/stable/stock/${lowercasedSymbol}/quote?token=${process.env.REACT_APP_IEX_API_TOKEN}`);
    return data;

}