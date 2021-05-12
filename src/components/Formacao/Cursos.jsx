import ListaCategorias from '../ListaCategorias';
import ListaPost from '../ListaPost';
import { Quadro, Quadro2 } from './style';

export const Cursos = () => {
  return (
    <>
      <Quadro >
        <ListaCategorias />
      </Quadro>
      <Quadro2>
        <ListaPost url={'/posts'} />
      </Quadro2>
    </>
  )
}
