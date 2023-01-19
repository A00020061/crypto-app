import React, { useState } from "react";

import LineGraph from "./Graph/Sparkline.js";
import { PieGraph } from "./Graph/Doughnut.js";
import DisplayChartNavbar from "./ChooseCoin/SelectCoin.js";
import {
  Container,
  MainContainer,
  ChartContainer,
  Div,
  CoinInfoDiv,
  IndicatorContainer,
  PieInfo,
  Summary,
  GreedFigure,
  Wrapper,
  Canvas,
} from "./charts.styles.js";

function CoinChart(props) {
  const [selectedType, setSelectedType] = useState("custom");

  const handleType = (item) => {
    setSelectedType(item.id);
  };
  return (
    <Container>
      <MainContainer>
        <ChartContainer>
          <CoinInfoDiv>
            <DisplayChartNavbar
              {...props}
              setPeriodState={props.setPeriodState}
              handleType={handleType}
            />
          </CoinInfoDiv>
          <Div>
            {props.coinValue?.prices && (
              <LineGraph
                data={
                  selectedType === "volume"
                    ? props.coinValue.total_volumes
                    : props.coinValue.prices
                }
                selectedType={selectedType}
              />
            )}
          </Div>
        </ChartContainer>
        <IndicatorContainer>
          <PieInfo>Fear greed indicator</PieInfo>
          <Wrapper>
            <GreedFigure>
              <Canvas>
                {props.greedValue?.data && (
                  <PieGraph greedValue={props.greedValue.data} />
                )}
              </Canvas>
              <h2>6,04</h2>
            </GreedFigure>
            <Summary>
              <ul>
                <li>Fear Indicator Level 1</li>
                <li>Fear Indicator Level 2</li>
                <li>Fear Indicator Level 3</li>
              </ul>
              <ul>
                <li>600</li>
                <li>400</li>
                <li>200</li>
              </ul>
            </Summary>
          </Wrapper>
        </IndicatorContainer>
      </MainContainer>
    </Container>
  );
}
export default CoinChart;
