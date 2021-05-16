import styled from 'styled-components';

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
  max-height: 30rem; 
  background: #f2f2f282;
  box-sizing: border-box;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const Quadro2 = styled.div`
  padding: 0.5rem;
  float: right;
  width: 78%;
  height: 30rem; 
  background: #f2f2f282; 
  border-radius: 1rem;
  overflow-y: scroll;
`;