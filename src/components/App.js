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
import { Modal, Button} from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

const App = () => {
  const [show, setShow] = useState(true);
  const openCart = useSelector(getPrintCart);
  const handleClose = () => setShow(false);

  return (
    <>
    <Modal show={show} onHide={handleClose}  size="lg">
    <Modal.Header closeButton>
      <Modal.Title style={{color:"#ff2875"}}>Gift By So</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p style={{textAlign:"center", fontSize:20}}>Suivez nous sur Instagram <a href="https://www.instagram.com/giftbyso" target="_blank"><Instagram /> GiftBySo </a>pour être au courant de toute l'actualité de <br/><span style={{color:"#ff2875"}}>Gift By So</span> !</p>
        <Modal.Footer>
            <Button style={{backgroundColor:"#ff2875", borderColor:"#ff2875"}} onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
      </Modal.Body>
    </Modal>
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
    </>
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
