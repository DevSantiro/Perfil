import React from 'react';
import ListaCategorias from '../ListaCategorias';
import ListaPost from '../ListaPost';
import { Quadro, Quadro2, QuadroPrincipal } from './style';

const BlocoFormacao = () => {
  return (
    <div className="container">
    <h2 className="titulo-pagina">Formações</h2>
    <QuadroPrincipal >
      <Quadro >
        <ListaCategorias />
      </Quadro>
      <Quadro2>
        <ListaPost url={'/posts'} />
      </Quadro2>
    </QuadroPrincipal>
    </div> 
  );
}

export default BlocoFormacao;