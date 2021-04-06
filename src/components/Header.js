import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/Logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { CartFill, Search } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getItemArray, getKeyword } from '../reducers';
import { printCart, changeKeyword } from '../actions';

const Header = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItemArray);
    useEffect(() => {
        dispatch(changeKeyword(''));
      }, []);
    const keyword = useSelector(getKeyword)

    const handleSearchSubmit = (e)  =>{
        e.preventDefault();
    }
    const handleSearchChange = (e)  =>{
        dispatch(changeKeyword(e.target.value))
    }
  return (
        <>
        <div className="banner">
            <marquee>
                <span style={{marginRight:"300px"}}>Des produits entièrement Victoria'Secret à des prix imbattables ! SUIVEZ NOUS SUR INSTAGRAM -&gt; @GIFTBYSO</span>
                <span style={{marginRight:"300px"}}>Des produits entièrement Victoria'Secret à des prix imbattables ! SUIVEZ NOUS SUR INSTAGRAM -&gt; @GIFTBYSO</span>
                <span>Des produits à des prix imbattables ! SUIVEZ NOUS SUR INSTAGRAM -&gt; @GIFTBYSO</span>
            </marquee>
        </div>
        <header className="header">
        <div className="main-title"><img src={logo} alt={"logo"} style={{width: 119,height: 78,paddingBottom:0,paddingTop:0}} /></div>
        <div className={`search-form-container divSearch`}    style={{width: "420px"}} >
            <form className="search-form" onSubmit={(e)=>handleSearchSubmit(e)}>
            <div>
            <input value={keyword.keyword} type="text" placeholder="Rechercher un produit, une marque....." onChange={(e)=>handleSearchChange(e)}/><Search style={{right:"10px"}}/> 
            </div>
            </form>
        </div>
        <div className="cart" onClick={() => dispatch(printCart())}>
            <span><CartFill className="fa fa-shopping-cart cart-icon" /></span>
            {items.length > 0 && <span className="cart-icon cart-count">{items.length}</span> }
            <span style={{paddingTop:"2px", fontSize:"15px"}}>Panier</span>
        </div>
        </header>
        </>
  )};
  



export default Header;
