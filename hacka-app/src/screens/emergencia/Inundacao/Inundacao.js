import React from 'react';
import flood from './flood.svg';
import "./Inundacao.css";

const Inundacao = () => {
  return (
    <div className="Main">
        <img src={flood} className="Inundacao-flood" alt="flood"/>
        <h1 className="title">O que fazer em caso de inundação?</h1>
        <hr></hr>
        <ul className="lista">
            <li className="topic">Durante a inundação</li>
            <ol>
                <li>Evite deslocamento para regiões problemáticas</li>
                <li>Se for seguro, permaneça em casa</li>
                <li>Se for área de risco, abandone o local com atecedência</li>
                <li>Separe documentos importantes e embale-os em sacos plásticos</li>
                <li>Ao sair, desligue a chave geral de eletricidade, água e gás</li>
                <li>Evite ao máximo atravessar as águas de carros ou a pé</li>
                <li>Se ficar isolado em local inseguro, chame imediatamente o Corpo de Bombeiros</li>
            </ol>
            <li className="topic">Após a inundação</li>
            <ol>
                <li>Antes de retornar para sua casa, verifique as condições de segurança estrutural e elétrica</li>
                <li>Após a inundação, higienize toda casas e objetos que tiveram contato com a água</li>
                <li>Limpe sua casa com água sanitária, utilizando 1 litro do produto para cada 20 litros de água</li>
            </ol>
        </ul>
    </div>
  );
}

export default Inundacao;
