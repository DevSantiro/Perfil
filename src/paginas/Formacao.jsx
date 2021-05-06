import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Formacao = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Formações</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={'/posts'} />
    </main>
  )
}

export default Formacao
