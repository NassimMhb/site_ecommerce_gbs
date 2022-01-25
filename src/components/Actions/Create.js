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


const Create = (props) => {
    const produitsCollection = collection(db, "produits");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true) };

    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [baseImage, setBaseImage] = useState("");

    const uploadImage = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setBaseImage(base64);
    };
  
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const addProduct = async () => {
        await addDoc(produitsCollection, { image: baseImage, nom: nom, prix: Number(prix), details: description });
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="ml">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un nouveau produit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Label>Image : </Form.Label><br />
                            <input type="file" 
                                onChange={(e) => {
                                    uploadImage(e);
                                }}
                            />
                            <br></br>
                            <div className="text-center">
                                <img src={baseImage} height="80px" />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Label>Nom du produit : </Form.Label>
                            <Form.Control required placeholder="Nom" name="nom" onChange={(e) => setNom(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Prix du produit : </Form.Label>
                            <Form.Control required placeholder="9.99" name="number" onChange={(e) => setPrix(e.target.value)} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Label>Description  : </Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" required onChange={(e) => setDescription(e.target.value)} />
                        </Col>
                    </Row>
                    <p></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button style={{ backgroundColor: "#ff2875", borderColor: "#ff2875" }} onClick={addProduct}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button style={{ backgroundColor: "#ff2875", borderColor: "#ff2875" }} onClick={handleShow}>
                <i className="bi bi-plus" style={{ fontSize: 17 }}></i> Ajouter un nouveau produit
                    </Button>

        </>
    )
};

export default Create;