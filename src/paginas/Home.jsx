import { TextField } from '@material-ui/core'
import React from 'react'
import Apresentacao from '../components/Apresentacao/Apresentacao'
import { Quadro, Quadro2, QuadroPrincipal } from '../components/Apresentacao/style'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Home = () => {

  const style = {

  }

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Apresentação</h2>
        <QuadroPrincipal >
          <Quadro>
          <div>
            <Apresentacao />
          </div>
          </ Quadro>
          <Quadro2>
            <TextField
              id="filled-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </ Quadro2>
        </QuadroPrincipal>
      </div>
    </main>
  )
}

export default Home
