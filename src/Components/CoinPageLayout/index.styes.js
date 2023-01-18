import styled from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ImStack } from "react-icons/im";
import { BsPlus } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
export const MainDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  padding: 1rem 2rem;
  margin: auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 30%;
  border-radius: 10px;
  padding: 12px;
  position: relative;
  display: flex;
  margin: 0.8rem 0;
  text-align: center;
  background-color: #191b1f;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);

  flex-direction: column;
  align-items: center;

  span {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.4rem;
    padding-top: 10px;
  }
`;
export const CoinMarketDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  margin-top: 0.5rem;
`;
export const ListDiv = styled.div`
  p {
    font-size: 13px;
    display: flex;
  }
`;
export const Summary = styled.p`
  color: white;
  font-size: 1.3rem;
  padding: 1rem 0;
  color: rgba(255, 255, 255, 0.9);
`;
export const CoinGrowth = styled.p`
  color: yellow;
  align-items: center;
  display: flex;
`;
export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* border: solid white; */

  p {
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 3.2px 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;
export const CoinDiv = styled.div`
  width: 30%;
  border: solid blue;
`;

export const CoinIconLink = styled(AiOutlineLink)`
  color: white;
  margin-right: 5px;
`;
export const StyleArrowDown = styled(IoIosArrowDown)`
  color: yellow;
  margin-right: 4px;
`;
export const StyleArrowUp = styled(IoIosArrowUp)`
  color: yellow;
  margin-right: 4px;
`;

export const OfficialLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 13px;
  padding-left: 3px;
  cursor: pointer;
`;
export const CoinName = styled.p`
  color: white;
  text-align: center;
  font-size: 1.2rem;
  padding: 2px 0;
  width: fit-content;
`;

export const CoinOfficalLink = styled.div`
  width: fit-content;
  margin-top: 1rem;
  display: flex;
`;

export const Span = styled.span`
  color: white;
  font-size: 2rem;
`;

export const StyleStack = styled(ImStack)`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 10px;
`;
export const StylePlusSquare = styled(BsPlus)`
  color: white;
  width: fit-content;
  font-size: 1rem;
  border-radius: 4px;
  background-color: blue;
  margin: 0 6px;
`;
export const Main = styled.main`
  margin: 12px 0;

  p {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const CoinInfo = styled.div`
  padding: 1.5rem;
  background-color: #191b1f;
  margin: 10px 0;
  border-radius: 6px;

  p {
    color: rgba(255, 255, 255, 0.7);
    font-family: arial, sans-serif;
    font-size: 13px;
  }
`;

export const CoinLink = styled.div`
  display: flex;

  justify-content: space-between;
`;
export const Link = styled.div`
  display: flex;
  width: 49%;

  color: rgba(255, 255, 255, 0.7);

  font-size: 13px;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 6px;
  align-items: center;
  background-color: #191b1f;
`;
export const TokenLink = styled.div`
  width: 48%;
  font-size: 13px;
  padding: 0.7rem;
  margin-inline: auto;
  color: rgba(255, 255, 255, 0.7);

  align-items: center;
  display: flex;
  justify-content: center;
`;
export const Footer = styled.footer`
  margin: 8px 0;
  background-color: #191b1f;

  border-radius: 6px;
`;
export const CoinLogo = styled.div`
  width: 90px;
  border: 0.5px solid white;
  height: 90px;
  margin: 1.5rem 0 10px 0;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ProgressBar = styled.div`
  width: 140px;
  height: 7px;
  border-radius: 10px;
  background-color: white;
`;
export const ProgressDiv = styled.div`
  width: 160px;
  height: 7px;
  margin-top: 0.8rem;
  margin-left: 0.5rem;

  border-radius: 10px;
  background-color: blue;
`;
export const NavigationLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
`;
export const Wrappers = styled.div`
  display: flex;
  width: 70%;
  text-align: left;
  color: white;
  justify-content: space-between;
  margin: 1rem;
  p {
    font-size: 0.9rem;
    padding: 0.18rem 0.5rem;
  }
`;
export const AtlData = styled.div``;
export const AthData = styled.div``;
