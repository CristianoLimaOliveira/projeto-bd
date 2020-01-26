import React from 'react';
import './styles.css';

const CorpoTelaRegistro = () => (
    <div className="corpoTelaRegistro">
        <register id="registro">
            <div className="forms">
                <label id="lbl_nome">Nome:</label>
                <input id="txt_nome" type="text"></input>
            </div>
            <div className="forms">
                <label id="lbl_email">E-mail:</label>
                <input id="txt_email" type="text"></input>
            </div>
            <div className="forms">
                <label id="lbl_senha">Senha:</label>
                <input id="txt_senha" type="text"></input>
            </div>
            <div className="forms">
                <label id="lbl_confirmarSenha">Confirmar Senha:</label>
                <input id="txt_confirmarSenha" type="text"></input>
            </div>
            <div className="forms">
                <a href="btn_registrar">Registrar</a>
            </div>
        </register>
    </div>
);

export default CorpoTelaRegistro;