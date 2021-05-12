import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/post.css';
import Apresentacao from '../components/Apresentacao/Apresentacao';
import { Quadro, Quadro2, QuadroPrincipal } from '../components/Apresentacao/style';
import Destaque from '../components/Destaque/Destaque';

const Post = () => {
  let history = useHistory();
  const { id } = useParams(); 
  const [post, setPost] = useState({});

  
  useEffect(() =>{
    busca(`/posts/${id}`, setPost).catch(() =>{
      history.push('/404')
    })
  }, [id]);

  return (
    <main className="container">
      <div className="titulo-pagina" style={{justifyContent: 'space-between', paddingRight: '1rem'}}>
        <h2>{post.title}</h2> {/*A ideia é aqui alterar por uma barra de navegacao (Informações, Formação, Certificação)*/}
        <Link to={`/formacao`}>
          <Button variant="contained" color="primary">
            Voltar
          </Button>
        </Link>
      </div>
      <QuadroPrincipal >
        <Quadro>
          <Apresentacao />
        </Quadro>
        <Quadro2 >
          <article className="cartao post">
            <h2 className="cartao__titulo">{post.title}</h2>
            <p className="cartao__texto">{post.body}</p>
          </article>
          <Destaque />
        </Quadro2>
      </QuadroPrincipal>
    </main>
  );
}

export default Post;