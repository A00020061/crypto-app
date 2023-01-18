import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormDiv,
  ImageDiv,
  MainDiv,
  Section,
  Wrapper,
  Note,
  Footer,
  CloseBtn,
  SaveBtn,
  UnorderList,
} from "./index.style";

const List = ({ item, ...props }) => {
  return (
    <li key={item} onClick={() => props.handleCoinListClick(item)}>
      {item}
    </li>
  );
};

function PopCoinForm(props) {
  const [date, setDate] = useState(new Date());
  const [isEmpty, setIsEmpty] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [inputMoneyValue, setInputMoneyValue] = useState("");
  const [childList, setChildList] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setChildList(props.childList);
  }, [props.childList]);

  const isNumeric = /^\d+$/;
  const handleDate = (date) => {
    setDate(date);
  };

  const handleChange = (e) => {
    setIsActive(true);
    setInputValue(e.target.value);
    e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false);
  };

  const handleCoinListClick = (item) => {
    childList.map((element) => {
      if (element.id === item) {
        setInputValue(element.name);
      }
      return element;
    });
    setIsActive(false);
  };
  const handleMoneyChange = (e) => {
    const target = e.target;
    const value = target.value;
    if (isNumeric.test(value)) {
      setInputMoneyValue(e.target.value);
    }
    e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCoinList = (value, amount) => {
    const item = { value, amount };
    props.handleList(item);
  };
  const handleClose = () => {
    if (isEmpty && inputValue === "") {
      props.IsActive();
    } else {
      alert("Are you sure want to leave the form?");
      props.IsActive();
    }
  };
  const handleSaveClose = (e) => {
    e.preventDefault();
    let value = inputValue;
    let amount = inputMoneyValue;
    if (!isEmpty && inputValue !== "" && inputMoneyValue !== "") {
      handleCoinList(value, amount);
      props.IsActive();
    } else {
      alert("please complete the form first");
    }
  };
  const coinNameList = childList?.map((item) => item.id);
  const filterItem = coinNameList
    ?.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
    .slice(0, 8);

  return (
    <>
      <Wrapper>
        <MainDiv>
          <h1>Select Coins</h1>
          <Section>
            <ImageDiv>
              <img
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="your browser does not allow"
              />
            </ImageDiv>
            <FormDiv>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Coin Name..."
                  value={inputValue}
                  onChange={handleChange}
                />
                <UnorderList>
                  {filterItem?.map((item) => {
                    if (inputValue !== "" && isActive) {
                      return (
                        <List
                          handleCoinList={handleCoinList}
                          item={item}
                          handleCoinListClick={handleCoinListClick}
                        />
                      );
                    }
                  })}
                </UnorderList>
              </form>
              <form>
                <input
                  type="text"
                  placeholder="Amount Owned..."
                  onChange={handleMoneyChange}
                  value={inputMoneyValue}
                />
                <ReactDatePicker selected={date} onChange={handleDate} />
              </form>
            </FormDiv>
          </Section>
          <Note>
            **if you submit a coin already in your inventory it will overwrite
            previous data.
          </Note>
          <Footer>
            <div>
              <CloseBtn IsActive={props.IsActive} onClick={handleClose}>
                Close
              </CloseBtn>
              <form>
                <SaveBtn
                  type="submit"
                  IsActive={props.IsActive}
                  onClick={handleSaveClose}
                >
                  Save and Close
                </SaveBtn>
              </form>
            </div>
          </Footer>
        </MainDiv>
      </Wrapper>
    </>
  );
}
export default PopCoinForm;
