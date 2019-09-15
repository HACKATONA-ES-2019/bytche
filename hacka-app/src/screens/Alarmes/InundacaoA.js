import React from 'react';
import flood from '../emergencia/Inundacao/flood.svg';
import './InundacaoA.css';

const InundacaoA = () => {
  return (
    <div className="InundacaoA">
        <img src={flood} className="Inundacao-flood" alt="flood" style={{ width: "500px", height: "500px" }}/>
        <p class="alarm">Inundação!</p>
    </div>
  );
}

export default InundacaoA;