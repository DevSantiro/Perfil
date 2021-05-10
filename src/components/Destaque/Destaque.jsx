import React, { useEffect, useState } from 'react';
import { busca } from '../../api/api';
import { LIDestaque } from './style';
import '../../assets/css/blog.css';
import { useHistory, useParams } from 'react-router';

const Destaque = () => {
  let history = useHistory();
  const [destaques, setDestaque] = useState({})
  const { id } = useParams(); 

  useEffect(() =>{
    busca(`/posts/${id}`, setDestaque).catch(() =>{
      history.push('/404')
    })
  }, [id]);


  return (
    <ul className="container" style={{display:"flex", justifyContent: "space-between", paddingLeft: "0rem", textAlign: "center"}}>
      {destaques.destaque.map((destaque) =>
        <LIDestaque>{destaque}</LIDestaque>
      )}             
    </ul>
  );
}

export default Destaque;