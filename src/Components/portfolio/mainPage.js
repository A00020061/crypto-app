import React, { useEffect, useState } from "react";
import PopCoinForm from "./popForm";
import axios from "axios";

import {
  Container,
  Header,
  Button,
  BtnDiv,
  Main,
  ImageSection,
  DataContainer,
  MainContainer,
  AssetDiv,
  DeleteIcon,
} from "./index.style";
import { CoinMarketValue, UserCoinMarketValue } from "./list";

const MarketCampare = ({ data, ...props }) => {
  return (
    <Main>
      <MainContainer>
        <ImageSection>
          <DeleteIcon onClick={() => props.handleRemove(data.id)} />

          <img src={data.image} alt="browser doesn't support" />
          <p>{data.name}</p>
        </ImageSection>
        <DataContainer>
          <CoinMarketValue data={data} />
          <UserCoinMarketValue data={data} />
        </DataContainer>
      </MainContainer>
    </Main>
  );
};

const getLocalItems = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const GetCoinLocalStorage = () => {
  let coins = localStorage.getItem("coin");
  if (coins) {
    return JSON.parse(localStorage.getItem("coin"));
  } else {
    return [];
  }
};

function MainPage() {
  const [IsActive, setIsActive] = useState(false);
  const [list, setList] = useState(getLocalItems());
  const [coinList, setCoinList] = useState([]);
  const [coinDataHouse, setCoinDataHouse] = useState(GetCoinLocalStorage());
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCoinData();
  }, []);

  const getCoinData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setCoinList(response.data);
    } catch (err) {
      setIsError(true);
    }
  };

  const handleRemove = (item) => {
    console.log("clicked item here", item);
    const filterList = coinDataHouse.filter((element) => element.id !== item);
    setCoinDataHouse(filterList);
  };

  const handleClick = () => {
    setIsActive(!IsActive);
  };
  const handleList = (items) => {
    if (items) {
      let str = items.value.toString().toLowerCase();
      coinList.map((item) => {
        if (item.id === str) {
          const newItem = { ...item, items };
          setCoinDataHouse([...coinDataHouse, newItem]);
        }
      });
      setList([...Object.values(list), items]);
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(coinDataHouse));
  }, [coinDataHouse]);
  console.log(coinDataHouse);
  return (
    <>
      <Container>
        <Header>
          <BtnDiv>
            <Button disabled={IsActive ? true : false} onClick={handleClick}>
              Add Asset
            </Button>
          </BtnDiv>
          {IsActive ? (
            <PopCoinForm
              IsActive={handleClick}
              handleList={handleList}
              childList={coinList}
            />
          ) : null}
        </Header>
        <AssetDiv IsActive={IsActive}>
          {list.length ? (
            coinDataHouse.map((item) => (
              <MarketCampare
                key={item.id}
                data={item}
                handleRemove={handleRemove}
              />
            ))
          ) : (
            <p>Asset folder is empty</p>
          )}
        </AssetDiv>
      </Container>
    </>
  );
}

export default MainPage;
