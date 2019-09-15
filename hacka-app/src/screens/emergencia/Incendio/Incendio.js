import React from 'react';
import fire from './fire.svg';
import "./Incendio.css";

const Incendio = () => {
  return (
    <div className="Main">
      <img src={fire} className="Incendio-fire" alt="fire"/>
      <h1 className="title">O que fazer em caso de incêndio?</h1>
      <hr></hr>
      <ul className="lista">
        <li className="mainTopic">Inicio do incêndio</li>
        <ol>
          <li>De forma segura verifique a extensão do fogo e se pode apaga-lo;</li>
          <li>Acione alarmes;</li>
          <li>Desligue a eletricidade;</li>
          <li>Se o local tem um brigadista, siga as orientações dele.</li>
        </ol>
        <li className="mainTopic">Saindo do local</li>
        <ol>
          <li>Mantenha a calma</li>
          <li>Se estiver em um pŕedio, não use elevador, desça pelas escadas. Sempre desça até o terreo, a menos que a fumaça venha dos andares inferiores</li>
          <li>Antes de abrir  uma porta verifique se ela está quente ou se há fumaça saindo dela, se a porta estiver quente e/ou houver fumaça, não abra. Se ela estiver fria, abra lentamente, mantendo seu corpo protegido atrás da porta</li>
          <li>Ao sair dos locais, feche as portas sem tranca-las, pois o fogo aumenta na  presença de oxigênio. Diminuir a quantidade pode evitar que o incendio se propague</li>
          <li>Sua vida vale mais que qualquer objeto, não volte para buscar nada</li>
          <li>Não tire sua roupa, ela servira como barreira contra o calor e a desidratação. Se houver a possibilidade molhe-as</li>
          <li>Na presença de fumaça, cubra o nariz com um pano, de preferência molhado</li>
          <li>Se o local estiver coberto por fumaça, abaixe-se e saia rastejando do local</li>
          <li>Tenha atenção as pessoas ao seu lado, se alguem estiver ficando nervoso ou descontrolado, tente acalma-lo, ele pode representar um grande perigo</li>
        </ol>
      </ul>
    </div>
  );
}

export default Incendio;
