import React, { useEffect, useState } from "react";
import { LandingPageLayout } from "../../Components/LandingPageLayout";
import axios from "axios";

function LandingPage() {
  const [coinLength, setCoinLength] = useState(12);
  const [coinData, setCoinData] = useState([]);
  const [coinPriceVolume, setCoinPriceVolume] = useState(null);
  const [period, setPeriod] = useState(365);
  const [greedValue, setGreedValue] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedType, setSelectedType] = useState("custom");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [coinList, setCoinList] = useState([]);

  const setPeriodState = (number) => {
    console.log("numberand state", number);
    setPeriod(number);
  };
  const setCoinState = (coin) => {
    setSelectedCoin(coin.toLowerCase());
  };
  useEffect(() => {
    getCoinData();
    getFearIndex();
  }, []);

  useEffect(() => {
    getCoinPriceVolume();
  }, [period, selectedCoin]);

  useEffect(() => {
    coinScrollFeatureData();
  }, [page]);

  const coinScrollFeatureData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinLength}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setCoinData([...coinData, ...response.data]);
      setCoinLength(10);
    } catch (err) {
      setIsError(true);
    }
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const getCoinData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinLength}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setCoinData(response.data);
      setCoinList(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  };

  const getCoinPriceVolume = async () => {
    try {
      setIsLoading(true);

      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=${period}&interval=daily`
      );
      setCoinPriceVolume(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  };
  const getFearIndex = async () => {
    try {
      setIsLoading(true);
      const response = await axios(`https://api.alternative.me/fng/?limit=1`);

      setGreedValue(response.data);
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <div>
      {coinData.length ? (
        <LandingPageLayout
          items={coinData}
          coinValue={coinPriceVolume}
          greedValue={greedValue}
          coinLength={coinLength}
          coinList={coinList}
          setPeriodState={setPeriodState}
          coinState={setCoinState}
          fetchMoreData={fetchMoreData}
          coinDataLength={coinData}
        />
      ) : (
        <h1>Error</h1>
      )}
    </div>
  );
}
export default LandingPage;
