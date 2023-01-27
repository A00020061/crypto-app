import React, { useState, useEffect } from "react";
import { CoinPage, LandingPage, PortfolioPage, Setting } from "./Pages";
import { Container, Wrapper, Nav } from "./App.styles.js";
import Navbar from "./Components/Navbar/index";
import { GlobalStyle } from "./styles/Globalstyles.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./Components/MainNavbar";
import axios from "axios";

const theme = {
  color: {
    bg: "",
    TextColor: "",
  },
};
function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Nav>
            <MainNavbar />
          </Nav>
          <GlobalStyle />
          <Wrapper>
            <Navbar coinList={coinList} />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/portfoliopage" exact component={PortfolioPage} />
              <Route path="/coinpage/:coinName" exact component={CoinPage} />
              <Route path="/setting" exact component={Setting} />
            </Switch>
          </Wrapper>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
export default App;
