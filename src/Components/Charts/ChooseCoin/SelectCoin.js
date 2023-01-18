import React, { useEffect, useState } from "react";

import {
  Wrapper,
  CoinSelection,
  CoinDisplayType,
  TimeDiv,
  InnerDiv,
  TableNavbar,
  Info,
  NestedList,
  Div,
  NestedDiv,
  NestedTimeList,
  NestedDataList,
  Styledarrow,
  StyledInput,
} from "../ChooseCoin/index.styles";

const NestedCoinList = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Input />
        </li>
        {props.list.map((item) => (
          <li key={item.name} onClick={() => props.handleCoin(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
const CoinInfoType = (props) => {
  return (
    <ul>
      {props.coinInfo.map((item) => (
        <li key={item.type} onClick={() => props.handleType(item)}>
          {item.type}
        </li>
      ))}
    </ul>
  );
};
const PeriodSelect = (props) => {
  return (
    <ul>
      {props.periodInfo.map((item) => (
        <li key={item.period} onClick={() => props.handlePeriod(item)}>
          {item.period}
        </li>
      ))}
    </ul>
  );
};

const Input = () => {
  return <StyledInput placeholder="Search coin..." />;
};

function DisplayChartNavbar(props) {
  const [list, setList] = useState(false);
  const [dataType, setDataType] = useState(false);
  const [timeSelect, setTimeSelect] = useState(false);
  const [coinList, setCoinList] = useState(props.coinList.slice(0, 8));
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [periodInfo, setPeriodInfo] = useState([
    { period: "1 day", id: 1 },
    { period: "1 week", id: 7 },
    { period: "1 month", id: 30 },
    { period: "1 year", id: 365 },
  ]);
  const [coinInfo, setCoinInfo] = useState([
    { type: "Price", id: "price" },
    { type: "Volume", id: "volume" },
    { type: "Custom", id: "custom" },
  ]);
  const handlePeriod = (item) => {
    setTimeSelect(false);
    periodInfo.forEach((element) => {
      if (element.id === item.id) {
        setSelectedTime(element.period);
        props.setPeriodState(element.id);
      }
    });
  };

  const handleType = (item) => {
    setDataType(false);
    coinInfo.forEach((element) => {
      if (element.id === item.id) {
        setSelectedType(element.type);
        props.handleType(element);
      }
    });
  };

  const handleCoin = (item) => {
    setList(false);
    coinList.forEach((element) => {
      if (element.name === item.name) {
        setSelectedCoin(element.name);
        props.coinState(element.name);
      }
    });
  };

  const handleList = () => {
    setList(!list);
    setTimeSelect(false);
    setDataType(false);
  };
  const handleTimeSelect = () => {
    setTimeSelect(!timeSelect);
    setList(false);
    setDataType(false);
  };
  const handleDatatype = () => {
    setDataType(!dataType);
    setTimeSelect(false);
    setList(false);
  };

  return (
    <Wrapper>
      <TableNavbar>
        <CoinSelection onClick={handleList}>
          <Info>{selectedCoin !== "" ? selectedCoin : "Bitcoin"}</Info>
          <Styledarrow />
        </CoinSelection>
        <NestedList>
          {list && <NestedCoinList list={coinList} handleCoin={handleCoin} />}
        </NestedList>
      </TableNavbar>
      <InnerDiv>
        <Div>
          <CoinDisplayType onClick={handleDatatype}>
            <Info>{selectedType !== "" ? selectedType : "Price"}</Info>

            <Styledarrow />
          </CoinDisplayType>
          <NestedDataList>
            {dataType && (
              <CoinInfoType coinInfo={coinInfo} handleType={handleType} />
            )}
          </NestedDataList>
        </Div>
        <TimeDiv>
          <NestedDiv onClick={handleTimeSelect}>
            <Info>{selectedTime !== "" ? selectedTime : "1 Year"}</Info>

            <Styledarrow />
          </NestedDiv>
          <NestedTimeList>
            {timeSelect ? (
              <PeriodSelect
                handlePeriod={handlePeriod}
                periodInfo={periodInfo}
              />
            ) : null}
          </NestedTimeList>
        </TimeDiv>
      </InnerDiv>
    </Wrapper>
  );
}
export default DisplayChartNavbar;
