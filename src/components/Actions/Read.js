import React, { useEffect, useState } from "react";

import Update from './Update';
import Delete from './Delete';

const Read = ({listeProduits, refresh}) => {

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
            <td><Update produit={produit} refresh={refresh}/></td>
            <td><Delete produit={produit} refresh={refresh}/></td>
          </tr>
        ))}
    </>
  );
};

export default Read;