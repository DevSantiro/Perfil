import React from 'react'
import { Quadro, Quadro2, QuadroPrincipal } from '../components/Apresentacao/style'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Formacao = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Formações</h2>
        <QuadroPrincipal >
          <Quadro style={
            {
              border: "1px solid", 
              borderRadius: "0.5rem",
              border: "2px solid rgba(0,0,0,0.54)",
              boxSizing: "border-box",
              boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
              borderRadius: "5px",
            }
          }>
            <ListaCategorias />
          </Quadro>
          <Quadro2>
            <ListaPost url={'/posts'} />
          </Quadro2>
        </QuadroPrincipal>
      </div>
    </main>
  )
}

export default Formacao
