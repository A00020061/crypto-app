import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoadingDiv } from "./index.styles.js";
import CoinPageLayout from "../../Components/CoinPageLayout";

export default function CoinPage(props) {
  const [coinData, setCoinData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCoinData();
  }, [props.match.params.coinName]);

  const getCoinData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${props.match.params.coinName}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setCoinData(response.data);
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <>
      {coinData ? (
        <CoinPageLayout data={coinData} />
      ) : (
        <LoadingDiv>Loading...</LoadingDiv>
      )}
    </>
  );
}
