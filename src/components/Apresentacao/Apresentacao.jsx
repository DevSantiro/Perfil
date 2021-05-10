import React, { useState } from 'react';
import { Container } from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

export default function Apresentacao() {

  const [imagem, setImagem] = useState('/person.jpg');

  function handleImage(){
    if (imagem == '/person.jpg') {
      setImagem('/myperson.png');
      return;
    }
    setImagem('/person.jpg');
  }
  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Imagem de Perfil"
            height="250"
            image={window.location.origin + imagem}
            title="Imagem de Perfil"
            onClick={handleImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Rodrigo Santiago
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Desenvolvedor 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Link to={{ pathname: 'https://github.com/DevSantiro' }} target="_blank">
            <Button size="small" color="primary"  startIcon={<GitHubIcon />}>
              Github
            </Button>
          </Link>
          <Link to={{ pathname: 'https://www.linkedin.com/in/rodrigo-santiago-04222a190/'}} target="_blank">
            <Button size="small" color="primary" startIcon={<LinkedInIcon />}>
              Linkedin
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  )
}