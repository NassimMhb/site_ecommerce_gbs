import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getKeyword, getPrintCart } from '../reducers';
import { STORE_ITEMS } from '../data';
import { useSelector } from 'react-redux';
import { db } from "./../utils/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import StoreItem from './StoreItem';

const ItemGrid = () => {
  const keyword = useSelector(getKeyword);
  const las = useSelector(getPrintCart);

  const [listeProduits, setListeProduits] = useState([]);
  const produitsCollection = collection(db, "produits");

  const getProduits = async () => {
    const data = await getDocs(produitsCollection);
    setListeProduits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("teststs", data)
  };
  
  useEffect(() => {
    getProduits();
  }, []);

  const filteredProducts = listeProduits.filter((product)=>{
    let productTitle = product.nom.toLowerCase();
    return productTitle.indexOf(keyword.keyword) > -1;
  });

 

  return (
    <Wrapper>
      {filteredProducts.length > 0 && filteredProducts.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}

    {filteredProducts.length === 0 &&
			<h3 className="noProduct">Aucun produit n'a été trouvé</h3>
		}   
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

export default ItemGrid;
