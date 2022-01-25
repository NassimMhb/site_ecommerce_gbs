import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { db } from "../../utils/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const Delete = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};

    const deleteProduct = async () => {
        console.log("deletee")
        let id = props.produit.id;
        const produitDoc = doc(db, "produits", id);
        await deleteDoc(produitDoc);
        handleClose();
    }

    return (
        <>
    <Modal show={show} onHide={handleClose} size="ml">
        <Modal.Header closeButton>
          <Modal.Title>Voulez-vous vraiment supprimer le produit ?</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <Row className="text-center">
              <Col>
                <Button className="btn btn-danger mr-1" onClick={deleteProduct}>
                  Supprimer
                </Button>
                <Button className="btn btn-success ml-1" onClick={handleClose}>
                  Annuler
                </Button>
              </Col>
            </Row>
          </Modal.Body>
      </Modal>


        <i className="bi bi-trash text-danger" style={{ fontSize: 25, cursor:"pointer" }} onClick={handleShow}></i>
        </>
    )
};

export default Delete;