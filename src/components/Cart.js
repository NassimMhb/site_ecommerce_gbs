import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Stepper from 'react-stepper-horizontal';

import { getItemArray, getSubtotal } from '../reducers';
import { formatPriceForHumans } from '../helpers';

import CartItem from './CartItem';
import Boutton from './Button';

import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Cart = () => {
  const items = useSelector(getItemArray);
  const subtotal = useSelector(getSubtotal);

  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  const handleClose = () => {setShow(false); setStep(0);}
  const handleShow = () => setShow(true); 

  const [messageCommande, setMsg] = useState("test");

  const chargerCommande = () => {
    const msgTemp = messageCommande;
    items.map((item) => (
      setMsg(msgTemp +" - "+item.quantity+" "+item.title)
     
    ))

  }

  const validateInformations = () => {
    chargerCommande();
    if(step == 0 || step == 1)
      setStep(step+1);
    else if(step == 2)
      setShow(false);
  }



  const retour = () => {
    setStep(0);
  }

  
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_z2vkhvr', 'template_puhzdsa', e.target, 'user_xWHQOtoi1f5PWIBR7dR1K')
      .then((result) => {
        setStep(2);
      }, (error) => {
        console.log(error.text);
      });
  }

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [adresse, setAdresse] = useState('');
  const [code_postal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');

  const handleInputChange = e =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if(name === 'nom')
        setNom(value);
    else if(name === 'prenom')
        setPrenom(value);
    else if(name === 'email')
        setEmail(value);
    else if(name === 'tel')
        setTel(value);
    else if(name === 'adresse')
        setAdresse(value);
    else if(name === 'code_postal')
        setCodePostal(value);
    else if(name === 'ville')
        setVille(value);
  }


  return (
    <>
    <Modal show={show} onHide={handleClose} size="lg">
    <Form onSubmit={sendEmail}>
    <Modal.Header closeButton style={{borderBottom:"none"}}>
    <Stepper activeColor={"#ff2875"} completeColor={"#ff8db6"} steps={ [{title: 'Entrez vos informations'}, {title: 'Résumé de votre commande'}, {title: 'Finalisation'}] } activeStep={ step } />
    </Modal.Header>
    <Modal.Body>
        {step == 1 &&
          <Button onClick={retour} style={{backgroundColor:"transparent", borderColor:"transparent", color:"gray", textDecoration: 'underline'}}>
              Retour
          </Button>
        }
        {step == 0 &&
        <>
          <Row>
            <Col>
              <Form.Label>Entrez votre prénom : </Form.Label>
              <Form.Control required placeholder="Prénom" name="prenom" value={prenom} onChange={handleInputChange}/>
            </Col>
            <Col>
              <Form.Label>Entrez votre nom : </Form.Label>
              <Form.Control required placeholder="Nom" name="nom" value={nom} onChange={handleInputChange}/>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Label>Entrez votre email : </Form.Label>
              <Form.Control required type="email" placeholder="email@gmail.com" name="email" value={email} onChange={handleInputChange}/>
            </Col>
            <Col>
              <Form.Label>Entrez votre n° de tél : </Form.Label>
              <Form.Control required placeholder="06 00 00 00 00" name="tel" value={tel} onChange={handleInputChange}/>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            <label for="inputAddress">Adresse</label>
            <input required type="text" className="form-control" id="inputAddress" placeholder="6 avenue des Champs Elysées" name="adresse" value={adresse} onChange={handleInputChange}/>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            <label for="inputCity">Ville</label>
            <input required type="text" className="form-control" id="inputCity" placeholder="Paris" name="ville" value={ville} onChange={handleInputChange}/>
            </Col>
            <Col>
            <label for="inputZip">Code postal</label>
            <input required type="text" className="form-control" id="inputZip" placeholder="75008" name="code_postal" value={code_postal} onChange={handleInputChange}/>
            </Col>
          </Row>
        </>   
        }
        {step == 1 &&
          <div style={{textAlign:"center", marginTop:"20px"}}>
            <h5 style={{color:"#ff2875", marginBottom:"20px"}}>Votre commande</h5>
            {items.map((item) => (
                <p style={{marginBottom:"10px"}}>- {item.quantity} {item.title}</p>
              ))}
          </div>
        }
        {step == 2 &&
          <div style={{textAlign:"center", marginTop:"20px"}}>
          <p>Votre commande a bien été prise en compte <span style={{color:"#ff2875"}}>Gift By So</span> vous conctatera dans les 24 heures suivant l'envoi de votre commande !</p>
          </div>
        }
        <Form.Control hidden placeholder="Prénom" name="prenom" value={prenom}/>
        <Form.Control hidden placeholder="Nom" name="nom" value={nom} />
        <Form.Control hidden type="email" placeholder="email@gmail.com" name="email" value={email}/>
        <Form.Control hidden placeholder="06 00 00 00 00" name="tel" value={tel}/>
        <input hidden type="text" className="form-control" id="inputAddress" placeholder="6 avenue des Champs Elysées" name="adresse" value={adresse}/>
        <input hidden type="text" className="form-control" id="inputCity" placeholder="Paris" name="ville" value={ville}/>   
        <input hidden type="text" className="form-control" id="inputZip" placeholder="75008" name="code_postal" value={code_postal}/>
    
        <input name="commandes" value={messageCommande} hidden/>
      </Modal.Body>
      <Modal.Footer>
      {step == 0 &&
      <Button style={{backgroundColor:"#ff2875", borderColor:"#ff2875"}} onClick={validateInformations}>
        Valider
      </Button>
      }
      {step == 1 &&
      <Button style={{backgroundColor:"#ff2875", borderColor:"#ff2875"}} type="submit">
          Valider
      </Button>
      }
      {step == 2 &&
      <Button style={{backgroundColor:"#ff2875", borderColor:"#ff2875"}} onClick={handleClose}>
        Fermer
      </Button>
      }

    </Modal.Footer>
    </Form>
    </Modal>

    <Wrapper>
      <Top>
        <Title>Votre panier</Title>
        <Subtitle>
          {items.length} {items.length === 1 ? 'Article' : 'Articles'}
        </Subtitle>

        <ItemList>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ItemList>
      </Top>
      <Bottom>
        <Total>
          Total: <strong>{formatPriceForHumans(subtotal)}</strong>
        </Total>
        {items.length < 1 &&  
        <Boutton disabled onClick={handleShow} style={{ width: 140, backgroundColor: "#a3a1a1" }}>Valider le panier</Boutton>
        }
        {items.length > 0 &&  
        <Boutton onClick={handleShow} style={{ width: 140, backgroundColor: "#ff8db6" }}>Valider le panier</Boutton>
        }
      </Bottom>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 300px;
  height: 90vh;
  background: #FF2875;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  opacity: 0.75;
`;

const ItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  padding-top: 32px;
`;

const Total = styled.div`
  font-size: 18px;
`;
export default Cart;
