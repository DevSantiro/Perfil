import React from 'react';
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
              Desenvolvedor 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Button size="small" color="primary"  startIcon={<GitHubIcon />}>
            Github
          </Button>

          <Button size="small" color="primary" startIcon={<LinkedInIcon />}>
            Linkedin
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}