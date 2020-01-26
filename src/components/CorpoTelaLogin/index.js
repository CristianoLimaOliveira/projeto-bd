import React from 'react';
import './styles.css';

const CorpoTelaLogin = () => (
    <div className="corpoTelaLogin">
        <register id="registro">
            <div className="forms">
                <label id="lbl_email">E-mail:</label>
                <input id="txt_email" type="text"></input>
            </div>
            <div className="forms">
                <label id="lbl_senha">Senha:</label>
                <input id="txt_senha" type="text"></input>
            </div><div className="forms">
                <a href="btn_registrar">Entrar</a>
            </div>
        </register>
    </div>
);

export default CorpoTelaLogin;