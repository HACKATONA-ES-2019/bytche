import React from 'react';
import fire from '../emergencia/Incendio/fire.svg';
import './IncendioA.css';

const IncendioA = () => {
  return (
    <div className="IncendioA">
        <img src={fire} className="Incendio-fire" alt="fire" style={{ width: "500px%", height: "500px" }}/>
        <p class="alarm">Incêndio!</p>
    </div>
  );
}

export default IncendioA;