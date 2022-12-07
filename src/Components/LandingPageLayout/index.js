import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import CoinChart from "../Charts/charts.js";
import { PageHeader } from "../DisplayHeader/index.js";

import Sparklines from "../Sparkline/Sparkline.js";

import {
  TableDiv,
  Table,
  TableRow,
  TableHeader,
  TableData,
  CoinImage,
  TableProgressChart,
  Div,
  Label,
  DivProgressBar,
  SparklineDiv,
  CoinInfo,
  WrapperContainer,
  MainWrapper,
  StyledArrowUp,
  StyledArrowDown,
} from "./index.styles.js";

export default function LandingPageLayout({
  items,
  coinValue,
  greedValue,
  ...props
}) {
  return (
    <MainWrapper>
      <WrapperContainer>
        <PageHeader />
        <CoinChart coinValue={coinValue} greedValue={greedValue} />
      </WrapperContainer>

      <TableDiv>
        {
          <Table>
            <TableRow>
              <TableHeader>
                # <StyledArrowDown />
              </TableHeader>
              <TableHeader>
                Name <StyledArrowDown />
              </TableHeader>
              <TableHeader>
                Price <StyledArrowDown />
              </TableHeader>
              <TableHeader>
                1h% <StyledArrowDown />
              </TableHeader>
              <TableHeader>
                24h% <StyledArrowDown />
              </TableHeader>
              <TableHeader>
                7d% <StyledArrowDown />
              </TableHeader>
              <TableHeader>24h Volume/Market Cap</TableHeader>
              <TableHeader>Circulating/Total Supply</TableHeader>
              <TableHeader>Last 7d</TableHeader>
            </TableRow>

            {items.map((element, index) => {
              return (
                <TableRow>
                  <TableData>{index + 1}</TableData>
                  <TableData>
                    <CoinInfo>
                      <CoinImage src={element.image} /> {element.name} (
                      {element.symbol.toUpperCase()})
                    </CoinInfo>
                  </TableData>
                  <TableData>${element.current_price}</TableData>
                  <TableData>
                    {element.price_change_percentage_1h_in_currency > 0 ? (
                      <StyledArrowUp />
                    ) : (
                      <StyledArrowDown />
                    )}
                    {element.price_change_percentage_1h_in_currency.toFixed(2)}%
                  </TableData>
                  <TableData>
                    {" "}
                    {element.price_change_percentage_24h_in_currency > 0 ? (
                      <StyledArrowUp />
                    ) : (
                      <StyledArrowDown />
                    )}
                    {element.price_change_percentage_24h_in_currency.toFixed(2)}
                    %
                  </TableData>
                  <TableData>
                    {" "}
                    {element.price_change_percentage_7d_in_currency > 0 ? (
                      <StyledArrowUp />
                    ) : (
                      <StyledArrowDown />
                    )}
                    {element.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </TableData>
                  <TableProgressChart>
                    <Div>
                      <Label>
                        $
                        {element.total_volume > 100000000
                          ? (element.total_volume / 100000000).toFixed(1) + "B"
                          : (element.total_volume / 1000000).toFixed(1) + "M"}
                      </Label>
                      <Label>
                        $
                        {element.market_cap > 100000000
                          ? (element.market_cap / 100000000).toFixed(1) + "B"
                          : (element.market_cap / 1000000).toFixed(1) + "M"}
                      </Label>
                    </Div>
                    <div>
                      <DivProgressBar
                        style={{
                          width: `${
                            (element.circulating_supply /
                              element.total_supply) *
                            100
                          }%`,
                        }}
                      ></DivProgressBar>
                    </div>
                  </TableProgressChart>
                  <TableProgressChart>
                    <Div>
                      <Label>
                        $
                        {element.circulating_supply > 100000000
                          ? (element.circulating_supply / 100000000).toFixed(
                              1
                            ) + "B"
                          : (element.circulating_supply / 1000000).toFixed(1) +
                            "M"}
                      </Label>
                      <Label>
                        $
                        {element.total_supply > 100000000
                          ? (element.total_supply / 100000000).toFixed(1) + "B"
                          : (element.total_supply / 1000000).toFixed(1) + "M"}
                      </Label>
                    </Div>
                    <div>
                      <DivProgressBar
                        style={{
                          width: `${
                            (element.circulating_supply /
                              element.total_supply) *
                            100
                          }%`,
                        }}
                      ></DivProgressBar>
                    </div>
                  </TableProgressChart>
                  <TableData>
                    <SparklineDiv>
                      <Sparklines coinData={element.sparkline_in_7d.price} />
                    </SparklineDiv>
                  </TableData>
                </TableRow>
              );
            })}
          </Table>
        }
      </TableDiv>
    </MainWrapper>
  );
}
