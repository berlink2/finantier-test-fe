import React, { useState } from 'react';
import { XYPlot, LineSeries, XAxis, YAxis, Hint } from 'react-vis';
import styled from 'styled-components';

const StockChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-right: 4rem;
`;

const xAxisTicks = [
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
];

const StockPriceChart = ({ formattedChartData }) => {
  const [hoverData, setHoverData] = useState(null);
  return (
    <StockChartContainer>
      <XYPlot
        animation
        height={300}
        width={600}
        xType='ordinal'
        onMouseLeave={() => setHoverData(null)}
      >
        <XAxis
          title='Time'
          tickFormat={(d) => {
            if (xAxisTicks.includes(d)) {
              return d;
            } else {
              return;
            }
          }}
        />
        <YAxis title='Price in USD' />
        <LineSeries
          animation
          onNearestX={(value) => {
            setHoverData(value);
          }}
          data={formattedChartData}
        />

        {hoverData && <Hint value={hoverData} />}
      </XYPlot>
    </StockChartContainer>
  );
};

export default StockPriceChart;
