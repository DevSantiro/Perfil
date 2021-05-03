import React from 'react';
import imagem from '../assets/img/page-not-found.svg';
import '../assets/css/404.css';

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna"> 
      <img src={imagem} alt="Não encontrado" className="nao-encontrado-imagem"/>
      <p className="naoencontrado-texto">
        Esta página não existe!
      </p>
    </main>
  )
}

export default Pagina404;