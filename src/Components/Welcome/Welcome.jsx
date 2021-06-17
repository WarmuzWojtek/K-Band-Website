import { Container } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useWindowPosition from '../../Hook/useWindowPosition';
import Grow from '@material-ui/core/Grow';
import '../../App.css'


const useStyles = makeStyles((theme) => ({

  root: {
    color: 'white',
    backgroundColor: '#242424',
    fontFamily: 'Nunito',
    textAlign: 'center',
    width: '90%',
    margin: '0 auto',
    '@media(max-width:960px)': {
      width: '100%',

    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  intro: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Nunito',
    marginTop: theme.spacing(2),
  },
  title: {
    fontFamily: 'Nunito',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '@media(max-width:960px)': {


    },
  },
  content: {
    fontFamily: 'Nunito',
    marginBottom: 12,
    color: 'white',
    '@media(max-width:960px)': {
      fontSize: '18px',
    },
  },
  container: {
    minHeight: '30vh',
    background: 'black',
    margin: 0,
    padding: theme.spacing(10),
    '@media(max-width:960px)': {
      padding: theme.spacing(4),

    },
    '@media(max-width:660px)': {
      padding: theme.spacing(2),

    },
  }
}));


export default function Main() {

  const classes = useStyles();
  const checked = useWindowPosition('header', 0.3);

  return (
    <div className={classes.container}  >
      <Container >
        <Grow in={checked} timeout={1000}>
          <Card className={classes.root} variant="elevation"  >
            <CardContent  >
              <Typography className={classes.intro} color="textSecondary" gutterBottom>
                Na początek przede wszystkim:
              </Typography>
              <Typography variant='h4' className={classes.title}>
                Witajcie Punki i Skiny!
              </Typography>
              <Typography variant='h6' className={classes.content} color="textSecondary">
                Przez około 20 lat działalności na scenie praktycznie nie istnieliśmy w sieci. Ostatecznie kilka lat po "śmierci" oddajemy Wam do poczytania/posłuchania/pooglądania to co po nas jeszcze gdzieś tam zostało, a co wg nas jest na tyle wartościowe, że można to bez większego przypału pokazać. Będzie tu trochę informacji, będzie trochę muzyki, a być może nawet jakieś miejsce do dyskusji, wspomnień , komentarzy. Bardzo nam miło, że tu trafiliście. Może nawet trochę wpisów na okołomuzyczne tematy... Miłego! PUNK`s NOT DEAD!
              </Typography>
              <Typography variant="h6" component="p">
                ZAPRASZAMY!
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </Container>
    </div >
  );
}

