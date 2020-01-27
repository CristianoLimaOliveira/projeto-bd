import React from 'react';
import './styles.css';

const CorpoTelaInicial = () => (
    <div className="corpoTelaInicial">
        <div id="telaInicial">
            <a href="/alterar">Modificar</a>
            <a href="btn_listar">Listar</a> {/* TODO: Criar tela de listagem */}
            <a href="/buscar">Buscar</a>
        </div>
    </div>
);

export default CorpoTelaInicial;