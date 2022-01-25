import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './GestionProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import Read from '../Actions/Read'
import Create from '../Actions/Create'
import { db } from "../../utils/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const GestionProducts = () => {
    const [listeProduits, setListeProduits] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const produitsCollection = collection(db, "produits");

    const getProduits = async () => {
      const data = await getDocs(produitsCollection);
      console.log("teststs")
      setListeProduits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    
    useEffect(() => {
      getProduits();
    }, []);

    return (
        <>
            <Row className="mr-4 ml-4">
                <Col className="text-left mb-4">
                    <div className="mb-4">
                        <h5>Gestion des produits</h5>
                    </div>
                    <div className="ml-5">
                        <Create refresh={getProduits}/>
                    </div>
                </Col>
            </Row>
            <Row className="mr-4 ml-4">
                <Col>
                    <div className="text-left mb-3">
                        <h5>Liste des produits</h5>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Réf</th>
                                <th scope="col">Image</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Détails</th>
                                <th scope="col">Prix</th>
                                <th scope="col" colSpan="2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Read listeProduits={listeProduits} refresh={getProduits}/>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    )
};




export default GestionProducts;
