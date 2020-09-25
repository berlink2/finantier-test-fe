import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { getStock } from './api/getStock';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

`

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

`

function App() {
  const [symbol, setSymbol] = useState('');

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const data = await getStock(symbol);
      console.log(data);
    }

  return (
    <AppContainer>
      <SymbolInputContainer>
        <form onSubmit={handleSubmit} className="search-form">
        <TextField
          value={symbol}
          onChange={(e)=>setSymbol(e.target.value)}
          className="search-form__input"
          fullWidth
          label="Stock symbol"
        />
        <Button type="submit" className="search-form__button" variant="contained" color="primary">
          Get Stocked!
        </Button>
        </form>
      </SymbolInputContainer>

    </AppContainer>
  );
}

export default App;
