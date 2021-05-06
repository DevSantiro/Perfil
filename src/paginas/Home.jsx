import React from 'react'
import Apresentacao from '../components/Apresentacao/Apresentacao'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Apresentação</h2>
        <Apresentacao />
      </div>
    </main>
  )
}

export default Home
