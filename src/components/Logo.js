import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/Logo.png';

const Logo = () => {
  return <Wrapper>
    <img src={logo} alt={"logo"} style={{width: 200,height: 200,paddingBottom:0,paddingTop:0}} />
   </Wrapper>;
};

const Wrapper = styled.h1`
  color: white;
  margin: 0;
  font-size: 32px;
  font-weight: normal;
  font-family: 'Fredoka One';
`;


export default Logo;
