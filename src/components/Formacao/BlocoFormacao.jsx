import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { Cursos } from './Cursos';
import { QuadroPrincipal } from './style';

const BlocoFormacao = () => {
  const [estadoConteudo, setestadoConteudo] = useState(0);

  const conteudoDinamico = [
    <Cursos />,
    <h1>OK</h1>
  ];
  

  function handleEstadoConteudo() {
    setestadoConteudo(estadoConteudo + 1);
  }

  return (
    <div className="container">
      <div className="titulo-pagina" style={{display: 'flex', justifyContent: "space-between", textAlign: "center"}}>
        <h2>Formações</h2>
        <Paper square style={{marginRight: '1rem', boxShadow: 'none'}}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <Tab label="Cursos" onClick={ handleEstadoConteudo } />
          <Tab label="Lorem1" disabled />
          <Tab label="Lorem2" onClick={ handleEstadoConteudo } />
        </Tabs>
      </Paper>
      </div>
      <QuadroPrincipal >
        { conteudoDinamico[estadoConteudo] }
      </QuadroPrincipal>
    </div> 
  );
}

export default BlocoFormacao;