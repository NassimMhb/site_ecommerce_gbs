import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import GestionProducts from './GestionProducts';
import 'font-awesome/css/font-awesome.min.css';
import './PageAdmin.css';

const PageAdmin = () => {

    const [isConnected, setIsConnected] = useState(false);
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [isIncorrect, setIsIncorrect] = useState(false);

    const checkConnexion = () => {
        if (name === "So" && password === "Solafeed") {
            setIsConnected(true);
        }else{
            setIsIncorrect(true);
        }
    }

    return (
        <>
            <header className="header-admin">
                <div className="main-title"><img src={logo} alt={"logo"} style={{ width: 119, height: 78, paddingBottom: 0, paddingTop: 0 }} /></div>
                {isConnected && <div className="title-admin"><h1>Page d'administrateur</h1></div> }
            </header>
            <div className="contentAdmin">
                {isConnected == false ?
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first mb-3 mt-3">
                                <h2>Gift By So</h2>
                            </div>
                            <input type="text" id="login" className="btnText fadeIn second input" name="login" placeholder="Nom d'utilisateur" value={name} onChange={(e)=>setName(e.target.value)} />
                            <input type="password" id="password" className="fadeIn third input" name="login" placeholder="Mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <br />
                            <input type="submit" className="fadeIn fourth mt-3 input" value="Se connecter" onClick={checkConnexion} />
                            {isIncorrect &&
                                <p className="text-danger">Nom d'utilisateur ou mot de passe incorrect</p>
                            }
                            <div id="formFooter"></div>
                        </div>
                    </div>


                : <GestionProducts />

            }
        </div>
        </>
    )
};




export default PageAdmin;
