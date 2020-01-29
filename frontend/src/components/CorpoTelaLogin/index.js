import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

const CorpoTelaLogin = () => {
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    var history = useHistory();

    function login() {
        var rgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/;
        if (rgx.test(email) && pswd.length >= 4) {
            console.log(rgx.test(email));

            axios.post('http://localhost:3000/login', {
                email: email,
                password: pswd
            })
                .then(function (response) {
                    console.log(response.data);
                    history.push('/inicio');
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log(rgx.test(email));

            alert('Login inválido!');
        }
    }

    return (
        <div className="corpoTelaLogin">
            <div id="login">
                <div className="forms">
                    <label id="lbl_email">E-mail:</label>
                    <input id="txt_email" type="text" value={email} onInput={e => setEmail(e.target.value)}></input>
                </div>
                <div className="forms">
                    <label id="lbl_senha">Senha:</label>
                    <input id="txt_senha" type='password' value={pswd} onInput={e => setPswd(e.target.value)}></input>
                </div>
                <div className="forms">
                    <a href="#" onClick={login} >Entrar</a>
                </div>
            </div>
        </div>
    );
};

export default CorpoTelaLogin;