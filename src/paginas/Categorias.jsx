import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Quadro, Quadro2, QuadroPrincipal } from '../components/Formacao/style';
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "../paginas/SubCategorias";

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id])

  return (
    <>
      <div className="container">
        <div className="titulo-pagina" style={{justifyContent: 'space-between', paddingRight: '1rem'}}>
          <h2>Formações</h2> {/*A ideia é aqui alterar por uma barra de navegacao (Informações, Formação, Certificação)*/}
          <Link to={`/formacao`}>
            <Button variant="contained" color="primary">
              Voltar
            </Button>
          </Link>
        </div>

        <QuadroPrincipal >
          <Quadro>
            <ListaCategorias />
          </Quadro>
          <Quadro2>
            <Switch>
              <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`} />
              </Route>
              <Route path={`${path}/:subcategoria`}>
                <SubCategoria />
              </Route>
            </Switch>
          </Quadro2>
        </QuadroPrincipal>
      </div>
    </>
  );
};

export default Categoria;
