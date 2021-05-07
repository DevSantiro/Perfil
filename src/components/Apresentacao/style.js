import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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