import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Formacao from './paginas/Formacao';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categorias';
import Home from './paginas/Home';

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/formacao'>
            <Formacao />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/categoria/:id'>
            <Categoria />
          </Route>

          <Route path='/posts/:id'>
            <Post />
          </Route>

          <Route >
            <Pagina404 />
          </Route>

        </Switch>
      </Router>
    </>  
  )
}

export default App
