import React from 'react';
import { Container } from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Apresentacao() {
  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Imagem de Perfil"
            height="250"
            image={window.location.origin + '/person.jpg'}
            title="Imagem de Perfil"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Rodrigo Santiago
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Github
          </Button>
          <Button size="small" color="primary">
            Alura
          </Button>
          <Button size="small" color="primary">
            Linkedin
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}