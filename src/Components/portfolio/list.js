import React from "react";
import { MarketCoinValue, UserCoinValue, Div, Title } from "./index.style";

export const CoinMarketValue = ({ data }) => {
  const marketCapTotalVolume = data.market_cap / data.total_volume;
  const circuleTotalSupply = data.circulating_supply / data.total_supply;
  return (
    <MarketCoinValue>
      <Title>Market Price: </Title>
      <Div>
        <p>Current price: $ {data.current_price}</p>
        <p>Price change 24h: $ {data.price_change_24h.toFixed(2)}</p>
        <p>Market Cap vs Volume: {marketCapTotalVolume.toFixed(2)}% </p>
        <p>Circ supply vs max supply: {circuleTotalSupply.toFixed(2)}%</p>
      </Div>
    </MarketCoinValue>
  );
};
export const UserCoinMarketValue = ({ data }) => {
  const date = new Date(data.items?.date);
  const currDate = date.toLocaleDateString();
  return (
    <UserCoinValue>
      <Title>Your Coin:</Title>

      <Div>
        <p> Coin amount: {data.items?.amount} </p>
        <p>Amount value</p>
        <p>Amount price change since purchase</p>
        <p>Purchase date: {currDate}</p>
      </Div>
    </UserCoinValue>
  );
};
