import React, { useEffect, useState } from 'react';
import { busca } from '../../api/api';
import { LIDestaque } from './style';
import '../../assets/css/blog.css';
import { useHistory, useParams } from 'react-router';

const Destaque = () => {
  const { id } = useParams(); 
  let history = useHistory();
  const [destaques, setDestaque] = useState([]);

  const url = `/posts/${id}`;
  useEffect(() =>{
    busca(url, setDestaque).catch(() =>{
      history.push('/404')
    })
  }, [url]);


  return (
    <ul className="container" style={{display:"flex", justifyContent: "space-between", paddingLeft: "0rem", textAlign: "center"}}>
      {destaques.destaque && destaques.destaque.map((campo) =>
        <LIDestaque key={campo}>{campo}</LIDestaque>
      )}  
    </ul>
  );
}

export default Destaque;