import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import {
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { getStock } from './api/getStock';
import CircularProgress from '@material-ui/core/CircularProgress';
import StockInfo from './Components/StockInfo';
import { getChartData } from './api/getChartData';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  height: 100vh;
`;

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

function App() {
  const [symbol, setSymbol] = useState('');
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(() => null);
    setLoading(() => true);
    try {
      const data = await getStock(symbol);
      const fetchedChartData = await getChartData(symbol);
      setStock(() => data);
      setChartData(() => fetchedChartData);
      setSearch(() => symbol);
    } catch (error) {
      setError(() => error);
    } finally {
      setLoading(() => false);
    }
  };

  const formattedChartData = useMemo(() => {
    console.log(chartData);
    return chartData
      ? chartData.map(({ minute, average }) => {
          return { x: minute, y: average };
        })
      : null;
  }, [search]);

  return (
    <AppContainer>
      <SymbolInputContainer>
        <form onSubmit={handleSubmit} className='search-form'>
          <TextField
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
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
      {loading ? (
        <CircularProgress style={{ marginTop: '10rem' }} size='5rem' />
      ) : stock && formattedChartData ? (
        <StockInfo formattedChartData={formattedChartData} stock={stock} />
      ) : null}
    </AppContainer>
  );
}

export default App;
