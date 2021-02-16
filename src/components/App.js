import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import ContentFooter from './ContentFooter';
import GlobalStyles from './GlobalStyles';


const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
        <Footer>
          <ContentFooter />
        </Footer>
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'header header header sidebar'
    'main main main sidebar';
  /* grid-gap: 64px; */
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
  padding-bottom:0;
  padding-top:0;
`;

const Footer = styled.footer`
  grid-area: main footer;
  padding-top:20px;
  text-align: center;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
