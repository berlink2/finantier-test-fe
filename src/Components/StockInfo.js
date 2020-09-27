import React, { useState } from 'react';
import styled from 'styled-components';
import StockPriceChart from './StockPriceChart';
import { formatCash } from '../utils/formatCash';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const StockInfoContainer = styled.div`
  width: 75rem;
  margin: 5rem 0 5rem 0rem;
  display: flex;
  flex-direction: column;
  transition: visibility 5s ease-in;
  animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CompanyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StockPriceContainer = styled.div`
  margin-left: 3rem;
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

      &--positive {
        color: green;
      }

      &--negative {
        color: red;
      }
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

const StockInfo = ({ stock, formattedChartData }) => {
  const [open, setOpen] = useState(true);

  return (
    <StockInfoContainer>
      <Accordion onChange={() => setOpen(!open)} expanded={open}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CompanyNameContainer>
            <Typography variant='h4'>
              {stock.companyName} ({stock.symbol})
            </Typography>
            <Typography variant='subtitle1'>
              {stock.primaryExchange} - {stock.latestSource}. Currency in USD
            </Typography>
          </CompanyNameContainer>
        </AccordionSummary>
        <AccordionDetails>
          <StockPriceContainer>
            <div className='price'>
              <Typography variant='h2'>
                <strong>{stock.latestPrice}</strong>
              </Typography>
              <span
                className={`price__percent ${
                  stock.change > 0 && stock.change !== 0
                    ? 'price__percent--positive'
                    : 'price__percent--negative'
                }`}
              >
                {stock.change > 0 ? '+' : '-'} {stock.change} (
                {stock.changePercent * 100}%)
              </span>
            </div>
            <Typography variant='subtitle2'>
              At close:{' '}
              {stock.closeTime
                ? new Date(stock.closeTime).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    hour12: true,
                    timeZone: 'America/New_York',
                    timeZoneName: 'short',
                  })
                : 'N/A'}
            </Typography>
            <StockPriceChart formattedChartData={formattedChartData} />
            <StockDetailsContainer>
              <div className='summary-item'>
                <Typography variant='body1'>Previous Close</Typography>
                <Typography variant='body1'>
                  <strong>
                    {stock.previousClose ? stock.previousClose : 'N/A'}
                  </strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Market Cap</Typography>
                <Typography variant='body1'>
                  <strong>{formatCash(stock.marketCap)}</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Open</Typography>
                <Typography variant='body1'>
                  <strong>{stock.open ? stock.open : 'N/A'}</strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Bid</Typography>
                <Typography variant='body1'>
                  <strong>
                    {stock.iexBidPrice
                      ? `${stock.iexBidPrice} x ${stock.iexBidSize}`
                      : 'N/A'}
                  </strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Ask</Typography>
                <Typography variant='body1'>
                  <strong>
                    {stock.iexAskPrice
                      ? `${stock.iexAskPrice} x ${stock.iexAskSize}`
                      : 'N/A'}
                  </strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Volume</Typography>
                <Typography variant='body1'>
                  <strong>
                    {stock.volume ? stock.volume.toLocaleString() : 'N/A'}
                  </strong>
                </Typography>
              </div>
              <div className='summary-item'>
                <Typography variant='body1'>Avg Volume</Typography>
                <Typography variant='body1'>
                  <strong>
                    {stock.avgTotalVolume
                      ? stock.avgTotalVolume.toLocaleString()
                      : 'N/A'}
                  </strong>
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
