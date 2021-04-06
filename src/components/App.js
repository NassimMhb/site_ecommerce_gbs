import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';

import Header from './Header';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import ContentFooter from './ContentFooter';
import GlobalStyles from './GlobalStyles';
import { getPrintCart } from '../reducers';
import { useSelector } from 'react-redux';

const App = () => {
  const openCart = useSelector(getPrintCart);

  return (
    <Wrapper>
      <Header/>
      <div className="container">
      <ItemGrid />
      </div>
      {openCart == true && 
      <div className="cartRight">
        <Cart />
      </div>
      }
      <Footer>
          <ContentFooter />
        </Footer>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // position: relative;
  // display: grid;
  // grid-template-areas:
  //   'header header header sidebar'
  //   'main main main sidebar';
  // /* grid-gap: 64px; */
`;

// const Header = styled.header`
//   grid-area: header;
//   padding: 32px 64px;
// `;

const Footer = styled.footer`
  grid-area: main footer;
  padding-top:20px;
  text-align: center;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

// const CartWrapper = styled.div`
//   grid-area: sidebar;
//   border-left: 3px dashed #ff406e;
//   padding-left: 8px;
// `;

export default App;
