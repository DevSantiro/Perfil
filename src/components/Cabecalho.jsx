import React from 'react';
import imagem from '../assets/img/dev.svg';
import '../assets/css/componentes/cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
  return (
    <header className="cabecalho container"> 
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span> 
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={imagem} alt="Logo" />
          <h1 className="cabecalho__titulo">DevSantiro</h1>
        </Link>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li><Link to="/" className="menu-item menu-item--entrar">Inicio</Link></li>
          <li><Link to="/" className="menu-item">Formação</Link></li>
          <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}

export default Cabecalho