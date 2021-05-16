import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { GridOneElement, GridThreeElement, GridTwoElement, TextInput } from '../Apresentacao/style';
import { QuadroPrincipal } from './styles';

export const Admin = () => {

  const [dados, setDados] = useState({
    nome: '',
    profissao: '',
    dtNascimento: '',
    sexo: '',
    estadoCivil: '',
    cidade: '',
    estado: '',
    descricao: ''
  })

  function changeHandler (e)  {
    setDados({...dados, [e.target.name] : e.target.value})
  }

  function submitHandler (e) {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/e31d3093-60be-4881-a7cd-28ff2cefb62c', dados)
    .then(response => {
      console.log(response);
    })
  }

  return (
    <QuadroPrincipal>
      <form onSubmit={submitHandler}>
        <GridTwoElement>
          <TextInput
            id="nome"
            label="Nome"
            name="nome"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          />
          <TextInput
            id="profissao"
            label="Profissão"
            name="profissao"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          />
        </GridTwoElement>

        <GridThreeElement>            
          <TextInput
            id="dataNascimento"
            label="Data de nascimento"
            name="dtNascimento"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          />
          <TextInput
            id="Sexo"
            label="Sexo"
            name="sexo"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          />
          <TextInput
            id="estadoCivil"
            label="Estado Civil"
            name="estadoCivil"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          />
        </GridThreeElement>

        <GridTwoElement>
          <TextInput
            id="cidade"
            label="Cidade"
            name="cidade"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          /> 

          <TextInput
            id="estado"
            label="Estado"
            name="estado"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={changeHandler}
          />
        </GridTwoElement>
        
        <GridOneElement>
          <TextInput
              id="descricao"
              label="Descrição"
              name="descricao"
              style={{ margin: 8 }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              multiline
              rows={4}
              onChange={changeHandler}
            />
        </GridOneElement>
        <Button type="submit" variant="contained" color="primary" disableElevation >Enviar</Button>
      </form>
    </QuadroPrincipal> 
  );
}