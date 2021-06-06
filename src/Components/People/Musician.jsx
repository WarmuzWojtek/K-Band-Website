import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
      marginBottom: theme.spacing(5),
      backgroundColor: '#F6F4F3',
    },
    image: {
      // width: '100%',
      transition: '0.3s',
      '&:hover': {
        width: '110%',
      },
    }
  }
});

export default function MusicianCard({ name, foto, desc }) {
  const classes = useStyles();
  const url = foto;
  const person = name
  const role = desc

  return (
    <Card className={classes.root} elevation={24}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt={person}
          height="345"
          image={process.env.PUBLIC_URL + url}
          title={person}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}