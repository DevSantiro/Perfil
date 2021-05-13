import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { Cursos } from './Cursos';
import Formacao from './Formacao';
import Experiencia from './Experiencia';
import { QuadroPrincipal } from './style';

const BlocoFormacao = () => {
  const [estadoConteudo, setestadoConteudo] = useState(0);
  const [tituloConteudo, settituloConteudo] = useState(0);

  const conteudoDinamico = [
    <Cursos />,
    <Formacao />,
    <Experiencia />
  ];

  const tituloDinamico = [
    "Cursos",
    "Formação Acadêmica",
    "Experiência Profissional"
  ]
  

  function handleEstadoCursos() {
    setestadoConteudo(0);
    settituloConteudo(0);
  }

  function handleEstadoFormacao(){
    setestadoConteudo(1);
    settituloConteudo(1);
  }

  function handleEstadoExperiencia(){
    setestadoConteudo(2);
    settituloConteudo(2);    
  }

  return (
    <div className="container">
      <div className="titulo-pagina" style={{display: 'flex', justifyContent: "space-between", textAlign: "center"}}>
        <h2>{tituloDinamico[tituloConteudo]}</h2>
        <Paper square style={{marginRight: '1rem', boxShadow: 'none'}}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <Tab label="Cursos" onClick={ handleEstadoCursos } />
          <Tab label="Formação Acadêmica" onClick={ handleEstadoFormacao } />
          <Tab label="Experiência Profissional" onClick={ handleEstadoExperiencia } />
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