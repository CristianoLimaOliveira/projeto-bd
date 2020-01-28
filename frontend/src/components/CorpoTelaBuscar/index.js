import React from 'react';
import './styles.css';

const CorpoTelaBuscar = () => (
    <div className="corpoTelaBuscar">
        <div id="buscar">
            <div className="forms">
                <label id="lbl_id">Número de identificação do Planeta:</label>
                <input id="txt_id" type="text"></input>
            </div>
            <div className="forms">
                <a href="btn_buscar">Buscar</a>
            </div>
        </div>
    </div>
);

export default CorpoTelaBuscar;