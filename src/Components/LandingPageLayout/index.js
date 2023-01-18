import React, { useState, useEffect } from "react";
import CoinChart from "../Charts/charts.js";
import { connect } from "react-redux";
import { getCoinName } from "../../services/action/coinNameAction";
import { PageHeader } from "../DisplayHeader/index.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Sparklines from "../Sparkline/Sparkline.js";

import {
  TableDiv,
  Table,
  TableRow,
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
  Figure,
  MainProgressBar,
  StyledLink,
  TableIndex,
  TableCoinInfo,
  Loading,
} from "./index.styles.js";

export const LandingPageLayout = ({
  items,
  coinValue,
  greedValue,
  coinList,
  coinDataLength,
  coinPageData,
  ...props
}) => {
  return (
    <>
      <MainWrapper>
        <WrapperContainer>
          <PageHeader />
          <CoinChart
            coinValue={coinValue}
            greedValue={greedValue}
            coinList={coinList}
            setPeriodState={props.setPeriodState}
            coinState={props.coinState}
          />
        </WrapperContainer>
        <TableDiv>
          {
            <Table>
              <TableRow>
                <TableIndex>#</TableIndex>
                <TableCoinInfo>Name</TableCoinInfo>
                <TableData>
                  Price <StyledArrowDown />
                </TableData>
                <TableData>
                  1h% <StyledArrowDown />
                </TableData>
                <TableData>
                  24h% <StyledArrowDown />
                </TableData>
                <TableData>
                  7d% <StyledArrowDown />
                </TableData>
                <TableProgressChart>24h Volume/Market Cap</TableProgressChart>
                <TableProgressChart>
                  Circulating/Total Supply
                </TableProgressChart>
                <SparklineDiv>Last 7d</SparklineDiv>
              </TableRow>

              <InfiniteScroll
                dataLength={coinDataLength.length}
                next={props.fetchMoreData}
                hasMore={true}
                loader={<Loading>Loading...</Loading>}
              >
                {items.map((element, index) => {
                  return (
                    <TableRow>
                      <TableIndex>{index + 1} </TableIndex>
                      <TableCoinInfo>
                        <StyledLink
                          to={`/coinpage/${element.id}`}
                          coinPageData={coinPageData}
                        >
                          <CoinInfo>
                            <CoinImage src={element.image} /> {element.name} (
                            {element.symbol.toUpperCase()})
                          </CoinInfo>
                        </StyledLink>
                      </TableCoinInfo>
                      <TableData>${element.current_price}</TableData>
                      <TableData>
                        <Figure
                          element={
                            element.price_change_percentage_1h_in_currency
                          }
                        >
                          {element.price_change_percentage_1h_in_currency >
                          0 ? (
                            <StyledArrowUp />
                          ) : (
                            <StyledArrowDown />
                          )}
                          {element.price_change_percentage_1h_in_currency.toFixed(
                            2
                          )}
                          %
                        </Figure>
                      </TableData>
                      <TableData>
                        <Figure
                          element={
                            element.price_change_percentage_24h_in_currency
                          }
                        >
                          {element.price_change_percentage_24h_in_currency >
                          0 ? (
                            <StyledArrowUp />
                          ) : (
                            <StyledArrowDown />
                          )}
                          {element.price_change_percentage_24h_in_currency.toFixed(
                            2
                          )}
                          %
                        </Figure>
                      </TableData>
                      <TableData>
                        <Figure
                          element={
                            element.price_change_percentage_7d_in_currency
                          }
                        >
                          {element.price_change_percentage_7d_in_currency >
                          0 ? (
                            <StyledArrowUp />
                          ) : (
                            <StyledArrowDown />
                          )}
                          {element.price_change_percentage_7d_in_currency.toFixed(
                            2
                          )}
                          %
                        </Figure>
                      </TableData>
                      <TableProgressChart>
                        <Div>
                          <Label>
                            $
                            {element.total_volume > 100000000
                              ? (element.total_volume / 100000000).toFixed(1) +
                                "B"
                              : (element.total_volume / 1000000).toFixed(1) +
                                "M"}
                          </Label>
                          <Label>
                            $
                            {element.market_cap > 100000000
                              ? (element.market_cap / 100000000).toFixed(1) +
                                "B"
                              : (element.market_cap / 1000000).toFixed(1) + "M"}
                          </Label>
                        </Div>
                        <MainProgressBar>
                          <DivProgressBar
                            style={{
                              width: `${
                                (element.circulating_supply /
                                  element.total_supply) *
                                100
                              }%`,
                            }}
                          ></DivProgressBar>
                        </MainProgressBar>
                      </TableProgressChart>
                      <TableProgressChart>
                        <Div>
                          <Label>
                            $
                            {element.circulating_supply > 100000000
                              ? (
                                  element.circulating_supply / 100000000
                                ).toFixed(1) + "B"
                              : (element.circulating_supply / 1000000).toFixed(
                                  1
                                ) + "M"}
                          </Label>
                          <Label>
                            $
                            {element.total_supply > 100000000
                              ? (element.total_supply / 100000000).toFixed(1) +
                                "B"
                              : (element.total_supply / 1000000).toFixed(1) +
                                "M"}
                          </Label>
                        </Div>
                        <MainProgressBar>
                          <DivProgressBar
                            style={{
                              width: `${
                                (element.circulating_supply /
                                  element.total_supply) *
                                100
                              }%`,
                            }}
                          ></DivProgressBar>
                        </MainProgressBar>
                      </TableProgressChart>

                      <SparklineDiv>
                        <Sparklines coinData={element.sparkline_in_7d.price} />
                      </SparklineDiv>
                    </TableRow>
                  );
                })}
              </InfiniteScroll>
            </Table>
          }
        </TableDiv>
      </MainWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  getName: state.selectedCoin,
});
const mapDispatchToProps = {
  selectedCoin: getCoinName,
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPageLayout);
