import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row  } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';

const Footer = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true); setSend(false)};


  const [send, setSend] = useState(false);
  // const handleSend = () => setSend(true);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_z2vkhvr', 'template_xrzt08p', e.target, 'user_xWHQOtoi1f5PWIBR7dR1K')
      .then((result) => {
          console.log(result.text);
          setSend(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nous contacter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {!send ? 
          <>
          <p><span style={{color:"#ff2875"}}>Gift By So</span> s'engage à vous répondre dans les 24 heures suivant l'envoi de votre message !</p>
          <br />
          <Form onSubmit={sendEmail}>
            <Row>
              <Col>
                <Form.Label>Entrez votre prénom : </Form.Label>
                <Form.Control required placeholder="Prénom" name="prenom"/>
              </Col>
              <Col>
                <Form.Label>Entrez votre nom : </Form.Label>
                <Form.Control required placeholder="Nom" name="nom"/>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Label>Entrez votre email : </Form.Label>
                <Form.Control required type="email" placeholder="email@gmail.com" name="email" />
              </Col>
              <Col>
                <Form.Label>Entrez votre n° de tél : </Form.Label>
                <Form.Control required placeholder="06 00 00 00 00" name="tel"/>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Label>Entrez votre message : </Form.Label>
                <Form.Control as="textarea" rows={3} name="message" required/>
              </Col>
            </Row>
            <p></p>
          <Modal.Footer>
          <Button style={{backgroundColor:"#ff2875", borderColor:"#ff2875"}} type="submit">
              Envoyer
          </Button>
        </Modal.Footer>
          </Form>
          </>
          : <>
            <p style={{textAlign:"center", fontSize:20}}>Votre message à bien été envoyé à <span style={{color:"#ff2875"}}>Gift By So</span> !</p>
            <Modal.Footer>
              <Button style={{backgroundColor:"#ff2875", borderColor:"#ff2875"}} onClick={handleClose}>
                Fermer
              </Button>
            </Modal.Footer></>
          }
          </Modal.Body>
        </Modal>

        <p><span style={{color:"#fff"}}>© Gift By So - </span><span onClick={handleShow} style={{color:"blue", cursor:"pointer"}}>Nous contacter</span></p>
        <p><span style={{color:"#fff"}}>Rejoignez nous également sur Instagram !</span>  <a href="https://www.instagram.com/giftbyso" target="_blank"><Instagram /> GiftBySo</a></p>
</>
  );
};
export default Footer;

