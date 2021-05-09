import { TextField, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  width: 16rem;
  background: #fff;
  /* height: 70vh; */
  border-radius: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.54);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: inline-block;
`;

export const QuadroPrincipal  = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  /* border-radius: 0 0 10px 10px; */
  border-radius: 1rem;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Quadro = styled.div`
  float: left;
  width: 20%;
  height: 30rem; /* Should be removed. Only for demonstration */
`;

export const Quadro2 = styled.div`
  padding: 0.5rem;
  float: right;
  width: 78%;
  height: 30rem; /* Should be removed. Only for demonstration */
`;

export const GridTwoElement = styled.div`
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: [input1] 1fr [input2] 1fr;
`;

export const GridThreeElement = styled.div`
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: [input1] 1fr [input2] 1fr [input3] 1fr;
`;

export const GridOneElement = styled.div`
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: [input1] 1fr;
`;


// Estilizando os Componentes do Material UI

export const TextInput = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
})(TextField);

