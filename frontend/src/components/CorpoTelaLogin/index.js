import React from 'react';
import './styles.css';

const CorpoTelaLogin = () => {
    return (
        <div className="corpoTelaLogin">
            <div id="login">
                <div className="forms">
                    <label id="lbl_email">E-mail:</label>
                    <input id="txt_email" type="text"></input>
                </div>
                <div className="forms">
                    <label id="lbl_senha">Senha:</label>
                    <input id="txt_senha" type="text"></input>
                </div><div className="forms">
                    <a href="/inicio" >Entrar</a>
                </div>
            </div>
        </div>
    );
};

export default CorpoTelaLogin;