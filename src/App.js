import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import StockInfo from './Components/StockInfo';
import SearchSymbol from './Components/SearchSymbol';
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
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  //Memoize x and y axis of stock chart data to prevent this expensive computation
  // from running every rerender
  const formattedChartData = useMemo(() => {
    return chartData
      ? chartData.map(({ minute, average }, i) => {
          if (minute && average) {
            return { x: minute, y: average };
          } else {
            for (let item of chartData.slice(i, chartData.length)) {
              if (item.minute && item.average) {
                return { x: item.minute, y: item.average };
              }
            }
          }
        })
      : null;
  }, [search]);

  return (
    <AppContainer>
      <SearchSymbol
        setStock={setStock}
        setSearch={setSearch}
        setLoading={setLoading}
        setChartData={setChartData}
      />
      {loading ? (
        <CircularProgress style={{ marginTop: '10rem' }} size='5rem' />
      ) : stock && formattedChartData ? (
        <StockInfo formattedChartData={formattedChartData} stock={stock} />
      ) : null}
    </AppContainer>
  );
}

export default App;
