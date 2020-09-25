import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StockInfoContainer = styled.div`
  width: 75rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const CompanyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StockPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .price {
    display: flex;

    &__percent {
      align-self: center;
      margin-left: 1rem;
      margin-top: 1.5rem;
      font-size: 2rem;
    }
  }
`;

const StockDetailsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;

  width: 100%;

  .summary-item {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid 1px lightgrey;
  }
`;

const StockInfo = () => {
  const [open, setOpen] = useState(true);
  return (
    <StockInfoContainer>
      <Accordion onChange={() => setOpen(!open)} expanded={open}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CompanyNameContainer>
            <Typography variant='h4'>Apple, Inc. (AAPL)</Typography>
            <Typography variant='subtitle1'>
              NasdaqGS - NasdqsGS Real Time Price. Currency in USD
            </Typography>
          </CompanyNameContainer>
        </AccordionSummary>
        <AccordionDetails>
          <StockPriceContainer>
            <div className='price'>
              <Typography variant='h2'>
                <strong>449.39</strong>
              </Typography>
              <span className='price__percent'>+7.24 (+1.64%)</span>
            </div>
            <Typography variant='subtitle2'>At close: 4:00PM EDT</Typography>
            <StockDetailsContainer>
              <div className='summary-item'>
                <Typography variant='body1'>Previous Close</Typography>
                <Typography variant='body1'>
                  <strong>442.15</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Market Cap</Typography>
                <Typography variant='body1'>
                  <strong>442.15B</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Open</Typography>
                <Typography variant='body1'>
                  <strong>442.15</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Bid</Typography>
                <Typography variant='body1'>
                  <strong>442.15B</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Ask</Typography>
                <Typography variant='body1'>
                  <strong>442.15B</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Volume</Typography>
                <Typography variant='body1'>
                  <strong>442.15B</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Avg Volume</Typography>
                <Typography variant='body1'>
                  <strong>442.15B</strong>
                </Typography>
              </div>
            </StockDetailsContainer>
          </StockPriceContainer>
        </AccordionDetails>
      </Accordion>
    </StockInfoContainer>
  );
};

export default StockInfo;

/*
 display current value, variation, previous close, open, bid, ask, 
 market cap, volume, avg volume and display a chart with the last 24 hours performance.
  (no need to add 5d, 1m or more ranges).
{"symbol":"AAPL","companyName":"Apple, Inc.",
"primaryExchange":"NASDAQ","calculationPrice":"tops",
"open":null,"openTime":null,
"openSource":"official","close":null,
"closeTime":null,"closeSource":"official","high":null,
"highTime":1601052323963,"highSource":"15 minute delayed price",
"low":null,"lowTime":1601041007439,"lowSource":"15 minute delayed price",
"latestPrice":110.56,"latestSource":"IEX real time price",
"latestTime":"1:00:21 PM","latestUpdate":1601053221054,"latestVolume":null,
"iexRealtimePrice":110.56,"iexRealtimeSize":100,"iexLastUpdated":1601053221054,
"delayedPrice":null,"delayedPriceTime":null,"oddLotDelayedPrice":null,"oddLotDelayedPriceTime":null,
"extendedPrice":null,"extendedChange":null,"extendedChangePercent":null,"extendedPriceTime":null,
"previousClose":108.22,"previousVolume":167743349,"change":2.34,"changePercent":0.02162,
"volume":null,"iexMarketPercent":0.005746168715198627,"iexVolume":449815,"avgTotalVolume":195236214,
"iexBidPrice":110,"iexBidSize":100,"iexAskPrice":111.09,"iexAskSize":100,"iexOpen":null,"iexOpenTime":null,
"iexClose":110.56,"iexCloseTime":1601053221054,"marketCap":1916811888000,"peRatio":33.32,"week52High":137.98,
"week52Low":53.15,"ytdChange":0.46287199999999995,"lastTradeTime":1601053221054,"isUSMarketOpen":true}
*/
