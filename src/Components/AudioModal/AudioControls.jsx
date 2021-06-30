import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '@media(max-width:860px)': {
      flexWrap: 'wrap',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,

    padding: theme.spacing(2),
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },

}));

export default function MediaControlCard({ title, link, foto }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content} >
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            KASTRACJA
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <audio controls>
            <source src={process.env.PUBLIC_URL + link} type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
      <CardMedia
        // src={process.env.PUBLIC_URL + '/audio/01.mp3'}
        className={classes.cover}
        image={process.env.PUBLIC_URL + foto}
        title="Live from space album cover"
      />
    </Card>
  );
}