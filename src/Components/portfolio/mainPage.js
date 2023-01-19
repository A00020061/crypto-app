import React, { useEffect, useState } from "react";
import PopCoinForm from "./popForm";
import axios from "axios";

import { Container, Header, Button, BtnDiv } from "./index.style";

const getLocalItems = () => {
  let list = localStorage.getItem("list");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function MainPage() {
  const [IsActive, setIsActive] = useState(false);
  const [list, setList] = useState(getLocalItems());
  const [coinList, setCoinList] = useState([]);
  const [isError, setIsError] = useState(false);

  const getCoinData = async (props) => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setCoinList(response.data);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getCoinData();
  }, []);

  const handleClick = () => {
    setIsActive(!IsActive);
  };
  const handleList = (item) => {
    setList([...Object.values(list), item]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
        <main>
          {list.length ? (
            <h1>{list.map((element) => element.value)}</h1>
          ) : (
            <h1>Asset folder is empty</h1>
          )}
        </main>
      </Container>
    </>
  );
}

export default MainPage;
