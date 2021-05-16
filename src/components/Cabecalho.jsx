import React, { useState } from 'react';
import imagem from '../assets/img/dev.svg';
import '../assets/css/componentes/cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
  
  const [estadoAtual, setEstadoAtual] = useState(0);

  function resetaClasses() {
    document.getElementById('Inicio').classList.remove('menu-item--entrar');
    document.getElementById('Formacao').classList.remove('menu-item--entrar');
    document.getElementById('Sobre').classList.remove('menu-item--entrar');
    document.getElementById('Admin').classList.remove('menu-item--entrar');

  }

  // Refatorar este trecho p/ uma unicaFuncao

  function handleEstadoAtualInicio(){
    resetaClasses();
    let item = document.getElementById('Inicio');
    item.classList.add('menu-item--entrar');
  }

  function handleEstadoAtualFormacao(){
    resetaClasses();
    let item = document.getElementById('Formacao');
    item.classList.add('menu-item--entrar');
  }

  function handleEstadoAtualSobre(){
    resetaClasses();
    let item = document.getElementById('Sobre');
    item.classList.add('menu-item--entrar');
  }

  function handleEstadoAtualAdmin(){
    resetaClasses();
    let item = document.getElementById('Admin');
    item.classList.add('menu-item--entrar'); 
  }

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
          <li><Link id="Inicio" to="/" onClick={handleEstadoAtualInicio} className="menu-item menu-item--entrar">Inicio</Link></li>
          <li><Link id="Formacao" to="/formacao" onClick={handleEstadoAtualFormacao} className="menu-item">Formação</Link></li>
          <li><Link id="Sobre" to="/sobre" onClick={handleEstadoAtualSobre} className="menu-item">Sobre</Link></li>
          <li><Link id="Admin" to="/administrador" onClick={handleEstadoAtualAdmin} className="menu-item">Administrador</Link></li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}

export default Cabecalho