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


const Update = ({produit, refresh}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};

    const [nom, setNom] = useState(produit.nom);
    const [prix, setPrix] = useState(produit.prix);
    const [description, setDescription] = useState(produit.details);
    const [nomUpdate, setNomUpdate] = useState("");
    const [prixUpdate, setPrixUpdate] = useState("");
    const [descriptionUpdate, setDescriptionUpdate] = useState("");

    const updateProduct = async () => {
        let id = produit.id;
        const produitDoc = doc(db, "produits", id);
        const newFields = "";
        if(nomUpdate != null){
            newFields = {nom: nomUpdate};
            await updateDoc(produitDoc, newFields);
        }
        if(prixUpdate != null){
            newFields = {prix: prixUpdate};
            await updateDoc(produitDoc, newFields);
        }
        if(descriptionUpdate != null){
            newFields = {details: descriptionUpdate};
            await updateDoc(produitDoc, newFields);
        }
        handleClose();
        refresh();
      };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="ml">
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le produit {produit.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Label>Image : </Form.Label><br />
                            <input type="file" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Label>Nom du produit : </Form.Label>
                            <Form.Control required placeholder="Nom" name="nom" defaultValue={nom} onChange={(e)=>setNomUpdate(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Prix du produit : </Form.Label>
                            <Form.Control required placeholder="9.99" name="number" defaultValue={prix} onChange={(e)=>setPrixUpdate(e.target.value)}/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Label>Description  : </Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" defaultValue={description} required onChange={(e)=>setDescriptionUpdate(e.target.value)}/>
                        </Col>
                    </Row>
                    <p></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "#ff2875", borderColor: "#ff2875" }} onClick={updateProduct}>
                        Modifier
                    </Button>
                </Modal.Footer>
            </Modal>

            <i className="bi bi-pencil-square text-success" style={{ fontSize: 25, cursor:"pointer" }} onClick={handleShow}></i>

        </>
    )
};

export default Update;