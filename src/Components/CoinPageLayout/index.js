import React from "react";

import {
  Container,
  Header,
  Section,
  Main,
  CoinInfo,
  CoinLink,
  Footer,
  CoinLogo,
  CoinName,
  CoinOfficalLink,
  MainDiv,
  CoinIconLink,
  OfficialLink,
  Span,
  StyleArrowDown,
  StyleStack,
  StylePlusSquare,
  ListDiv,
  Link,
  TokenLink,
  Wrapper,
  CoinGrowth,
  Summary,
  CoinMarketDiv,
  ProgressBar,
  ProgressDiv,
  NavigationLink,
  Wrappers,
  AtlData,
  AthData,
  StyleArrowUp,
} from "./index.styes";

const ItemList = ({ item, data }) => {
  return (
    <ListDiv>
      <p>
        <StylePlusSquare /> {item}: ${data}
      </p>
    </ListDiv>
  );
};

const CoinPageLayout = ({ data }) => {
  const athDate = new Date(
    data?.market_data.ath_date?.usd
  ).toLocaleDateString();
  const atlDate = new Date(
    data?.market_data.atl_date?.usd
  ).toLocaleDateString();

  return (
    <Container>
      <MainDiv>
        <Summary>Your Summary:</Summary>
        <Header>
          <Section>
            <CoinLogo>
              <img src={data?.image.large} alt="coin logo" />
            </CoinLogo>
            <CoinName>{data?.id}</CoinName>
            <CoinOfficalLink>
              <CoinIconLink />
              <OfficialLink target="_blank" href={data.links?.homepage[0]}>
                {data.links?.homepage[0]}
              </OfficialLink>
            </CoinOfficalLink>
          </Section>
          <Section>
            <Span>${data.market_data?.current_price.usd}</Span>
            <CoinMarketDiv>
              <CoinGrowth>
                {data?.market_data?.price_change_24h > 0 ? (
                  <StyleArrowUp />
                ) : (
                  <StyleArrowDown />
                )}

                {data?.market_data?.price_change_24h.toFixed(3) + "%"}
              </CoinGrowth>
              <StyleStack />
            </CoinMarketDiv>
            <Wrappers>
              <AthData>
                <p>ATH:</p>
                <p>${data?.market_data.ath.usd}</p>
                <p>
                  {" "}
                  {(data?.market_data.ath_change_percentage?.usd).toFixed(2)}%
                </p>
                <p>{athDate}</p>
              </AthData>
              <AtlData>
                <p>ATL:</p>
                <p>${data?.market_data.atl.usd}</p>
                <p>
                  {" "}
                  {(data?.market_data.atl_change_percentage?.usd).toFixed(2)}%
                </p>
                <p>{atlDate}</p>
              </AtlData>
            </Wrappers>
          </Section>
          <Section>
            <Wrapper>
              <ItemList
                item="Market Cap"
                data={
                  (data.market_data?.market_cap?.usd / 1000000).toFixed(2) + "M"
                }
              />
              <ItemList
                item="Fully Diluated Valuation "
                data={
                  (
                    data.market_data?.fully_diluted_valuation?.usd / 1000000
                  ).toFixed(2) + "M"
                }
              />
              <ItemList
                item="Current Price"
                data={data.market_data?.current_price.usd}
              />
              <ItemList
                item="Volume/Market"
                data={(
                  data.market_data?.total_volume.usd /
                  data.market_data?.market_cap?.usd
                ).toFixed(4)}
              />
              <br />
              <ItemList
                item="Total Volume"
                data={
                  (data.market_data?.total_volume.usd / 1000000).toFixed(2) +
                  "M"
                }
              />
              <ItemList
                item="Circulation Supply"
                data={
                  (data.market_data?.circulating_supply / 1000000).toFixed(2) +
                  "M"
                }
              />
              <ItemList
                item="Max Supply"
                data={
                  data.market_data?.max_supply
                    ? data.market_data?.max_supply
                    : 0
                }
              />
              <ProgressDiv>
                <ProgressBar></ProgressBar>
              </ProgressDiv>
            </Wrapper>
          </Section>
        </Header>
        <Main>
          <p>Description</p>
          <CoinInfo>
            <p>{data?.description.en}</p>
          </CoinInfo>
          <CoinLink>
            <Link>
              <CoinIconLink />{" "}
              <NavigationLink
                target="_blank"
                href={data?.links?.blockchain_site[0]}
              >
                {data?.links?.blockchain_site[0]}
              </NavigationLink>
            </Link>
            <Link>
              <CoinIconLink />{" "}
              <NavigationLink
                target="_blank"
                href={data?.links?.blockchain_site[0]}
              >
                {data?.links?.blockchain_site[0]}
              </NavigationLink>
            </Link>
          </CoinLink>
        </Main>
        <Footer>
          <TokenLink>
            <CoinIconLink />
            <NavigationLink
              target="_blank"
              href={data?.links?.blockchain_site[0]}
            >
              {data?.links?.blockchain_site[0]}
            </NavigationLink>
          </TokenLink>
        </Footer>
      </MainDiv>
    </Container>
  );
};

export default CoinPageLayout;
