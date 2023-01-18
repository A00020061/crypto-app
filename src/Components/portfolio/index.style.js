import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  color: white;
`;
export const Header = styled.header``;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45%;
  transform: translate(-50%, -50%);
  border: solid white;
  padding: 12px 0px;
`;

export const MainDiv = styled.div`
  text-align: center;
  width: 90%;
  margin-inline: auto;
  h1 {
    color: white;
    width: fit-content;
    margin-inline: auto;
    padding: 4px;
    font-size: 1.5rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Footer = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  div {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const CloseBtn = styled.button`
  font-size: 1rem;
  padding: 11px 24px;
  color: #ffaf2c;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const SaveBtn = styled.button`
  font-size: 1rem;
  padding: 11px 24px;
  color: white;
  background-color: #ffaf2c;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ImageDiv = styled.div`
  width: 25%;
  height: 120px;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Note = styled.p`
  color: black;
  font-size: 0.8rem;
  padding: 4px 0px;
  color: white;
  text-align: center;
  margin-top: -4px;
  margin-bottom: 4px;
`;

export const FormDiv = styled.div`
  width: 70%;
  padding: 5px;
  form {
    input {
      width: 100%;
      border: 0.2px solid black;
      font-size: 1rem;
      padding: 8px 0px 8px 12px;
      margin: 10px 0px;
      border-radius: 5px;
    }
    ul {
      width: 300px;
    }
  }
`;

export const Image = styled.img``;

export const Button = styled.button`
  font-size: 1.5rem;
  padding: 1.2rem 6rem;
  border-radius: 10px;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const UnorderList = styled.ul`
  position: absolute;
  text-align: center;
  background-color: white;
  margin-top: -0.5rem;
  color: black;
  z-index: 100;
  li {
    padding: 5px 0px;
    list-style: none;
  }
  li:hover {
    background-color: #1f2128;
    color: white;
  }
`;
