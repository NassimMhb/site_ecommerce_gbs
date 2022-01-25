import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Update from './Update';
import Delete from './Delete';

const Read = () => {
  const [listeProduits, setListeProduits] = useState([]);
  const produitsCollection = collection(db, "produits");

  const getProduits = async () => {
    const data = await getDocs(produitsCollection);
    setListeProduits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  useEffect(() => {
    getProduits();
  }, []);

  return (
    <>
      {listeProduits &&
        listeProduits.map((produit, index) => (
          <tr>
            <th scope="row">{produit.id}</th>
            <td> <img src={produit.image} height="35px" /></td>
            <td>{produit.nom}</td>
            <td>{produit.details}</td>
            <td>{produit.prix}</td>
            <td><Update produit={produit}/></td>
            <td><Delete produit={produit}/></td>
          </tr>
        ))}
    </>
  );
};

export default Read;