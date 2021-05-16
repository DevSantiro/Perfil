import React from 'react'
import Apresentacao from '../components/Apresentacao/Apresentacao'
import { GridTwoElement, GridThreeElement, Quadro, Quadro2, QuadroPrincipal, TextInput, GridOneElement } from '../components/Apresentacao/style'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Apresentação</h2> {/*A ideia é aqui alterar por uma barra de navegacao (Informações, Formação, Certificação)*/}
        <QuadroPrincipal >
          <Quadro>
            <Apresentacao />
          </ Quadro>

          <Quadro2>
            <GridTwoElement>
              <TextInput
                id="nome"
                label="Nome"
                value={"Rodrigo Santiago Claro Filho"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextInput
                id="profissao"
                label="Profissão"
                value={"Desenvolvedor"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </GridTwoElement>

            <GridThreeElement>            
              <TextInput
                id="dataNascimento"
                label="Data de nascimento"
                value={"28/01/1999"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextInput
                id="Sexo"
                label="Sexo"
                value={"Masculino"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextInput
                id="estadoCivil"
                label="Estado Civil"
                value={"Solteiro"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </GridThreeElement>

            <GridTwoElement>
              <TextInput
                id="cidade"
                label="Cidade"
                value={"Rio Claro"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              /> 

              <TextInput
                id="estado"
                label="Estado"
                value={"São Paulo"}
                style={{ margin: 8 }}
                disabled
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </GridTwoElement>
            
            <GridOneElement>
              <TextInput
                  id="descricao"
                  label="Descrição"
                  style={{ margin: 8 }}
                  disabled
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  multiline
                  rows={4}
                  defaultValue=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sequi similique 
                    et earum assumenda fugit rerum, architecto eos corporis ea, voluptate eligendi temporibus 
                    qui exercitationem modi labore. Minus sunt praesentium accusamus, nam, dolore quae, nemo rem 
                    ipsa iusto deserunt dolorem! default"
                />
            </GridOneElement>
            
          </ Quadro2>
        </QuadroPrincipal>
      </div>
    </main>
  )
}

export default Home
