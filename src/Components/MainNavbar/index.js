import React, { useState } from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { AiOutlineFundView } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";
import { CgTranscript } from "react-icons/cg";
import { BsStar } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import {
  Container,
  Div,
  StyleMarket,
  Title,
  StyleLogo,
  StyleWallet,
  StyleNews,
  StyleOverview,
  StyleAccount,
  StyleTransaction,
  StylePortfolio,
  StyleSetting,
  StyledLink,
} from "./index.styles";

const MainNavbar = () => {
  return (
    <Container>
      <Div>
        <StyleLogo>
          <SiRedux />
        </StyleLogo>
        <Title>Your Logo</Title>
      </Div>
      <Div>
        <StyledLink to={`/`}>
          <StyleOverview>
            <AiOutlineFundView />
          </StyleOverview>
          <Title>Overview</Title>
        </StyledLink>
      </Div>
      <Div>
        <StyleWallet>
          <FaWallet />
        </StyleWallet>
        <Title>Wallet</Title>
      </Div>
      <Div>
        <StyleNews>
          <HiOutlineNewspaper />
        </StyleNews>
        <Title>News</Title>
      </Div>
      <Div>
        <StyleMarket>
          <BsFillBarChartFill />
        </StyleMarket>
        <Title>Market</Title>
      </Div>
      <Div>
        <StyleAccount>
          <VscAccount />
        </StyleAccount>
        <Title>Account</Title>
      </Div>
      <Div>
        <StyleTransaction>
          <CgTranscript />
        </StyleTransaction>
        <Title>Transactions</Title>
      </Div>
      <Div>
        <StyledLink to={`/portfoliopage`}>
          <StylePortfolio>
            <BsStar />
          </StylePortfolio>
          <Title>Portfolio</Title>
        </StyledLink>
      </Div>
      <Div>
        <StyledLink to={`/setting`}>
          <StyleSetting>
            <IoSettingsOutline />
          </StyleSetting>
          <Title>Setting</Title>
        </StyledLink>
      </Div>
    </Container>
  );
};
export default MainNavbar;
