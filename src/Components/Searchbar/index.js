import React, { useState, useEffect } from "react";
import { Container, Input, UnorderList, StyleLink } from "./index.styles.js";

const List = ({ item, ...props }) => {
  return (
    <StyleLink
      onClick={props.handleList}
      to={`/coinpage/${item}`.toLowerCase()}
    >
      {item}
    </StyleLink>
  );
};

export default function Searchbox(props) {
  const [value, setValue] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setCoinList(props.coinList);
  }, [props.coinList]);

  const handleList = () => {
    setIsActive(false);
    setValue("");
  };
  const handleChange = (event) => {
    setIsActive(true);
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsActive(false);
    setValue("");
  };
  const coinNameList = coinList?.map((item) => item.id);
  const filterItem = coinNameList
    ?.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    .slice(0, 12);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Search..."
          />
        </form>
        <UnorderList>
          {filterItem?.map((item) => {
            if (value !== "" && isActive)
              return <List item={item} handleList={handleList} />;
          })}
        </UnorderList>
        {}
      </Container>
    </>
  );
}
