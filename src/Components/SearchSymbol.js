import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { getStock } from '../api/getStock';
import { getChartData } from '../api/getChartData';
const SymbolInputContainer = styled.div`
  .search-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__input {
      width: 30rem;
    }

    &__button {
      margin-top: 1rem;
      width: 10rem;
    }
  }
`;

const SearchSymbol = ({ setStock, setSearch, setLoading, setChartData }) => {
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(() => null);
    setLoading(() => true);
    try {
      const stockPriceData = await getStock(symbol);
      const fetchedChartData = await getChartData(symbol);
      setStock(() => stockPriceData);
      setChartData(() => fetchedChartData);
      setSearch(() => symbol);
    } catch (error) {
      setError(() => error);
      setStock(() => null);
    } finally {
      setLoading(() => false);
    }
  };

  const handleChange = (e) => {
    if (error) {
      setError(() => null);
    }
    setSymbol(e.target.value);
  };

  return (
    <SymbolInputContainer>
      <form onSubmit={handleSubmit} className='search-form'>
        <TextField
          value={symbol}
          onChange={(e) => handleChange(e)}
          className='search-form__input'
          fullWidth
          label='Stock symbol'
          error={error ? true : false}
          helperText={error ? 'Symbol not found' : ''}
        />
        <Button
          type='submit'
          className='search-form__button'
          variant='contained'
          color='primary'
        >
          Get Stocked!
        </Button>
      </form>
    </SymbolInputContainer>
  );
};

export default SearchSymbol;
