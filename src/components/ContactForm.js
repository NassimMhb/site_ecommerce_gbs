import React from "react";
import { Form, Col, Row } from 'react-bootstrap';

const ContactForm = () => {

  return (
    <>
    <p><span style={{color:"#ff2875"}}>Gift By So</span> s'engage à vous répondre dans les 24 heures suivant l'envoi de votre message !</p>
    <br />
    <Form>
      <Row>
        <Col>
          <Form.Label>Entrez votre prénom : </Form.Label>
          <Form.Control placeholder="Prénom" />
        </Col>
        <Col>
          <Form.Label>Entrez votre nom : </Form.Label>
          <Form.Control placeholder="Nom" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Entrez votre email : </Form.Label>
          <Form.Control type="email" placeholder="email@gmail.com" />
        </Col>
        <Col>
          <Form.Label>Entrez votre numéro de téléphone : </Form.Label>
          <Form.Control placeholder="06 00 00 00 00" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Entrez votre message : </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Col>
      </Row>
    </Form>
    </>
  );
};

export default ContactForm;