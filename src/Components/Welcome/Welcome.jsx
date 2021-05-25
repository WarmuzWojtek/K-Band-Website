import { Container } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useWindowPosition from '../../Hook/useWindowPosition';
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles((theme) => ({

  root: {
    minWidth: 275,
    color: 'white',
    backgroundColor: '#242424',
    fontFamily: 'Nunito',
    textAlign: 'center',
    width: '90%',
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Nunito',
  },
  pos: {
    marginBottom: 12,
    color: '#a3a3a3',
  },
  container: {
    minHeight: '30vh',
    background: 'black',
    margin: 0,
    padding: theme.spacing(10),
  }
}));


export default function Main() {

  const classes = useStyles();
  const checked = useWindowPosition('header', 0.3);

  return (
    <div className={classes.container}  >
      <Container>
        <Grow in={checked} timeout={1000}>
          <Card className={classes.root} variant="elevation"  >

            <CardContent  >

              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Na początek przede wszystkim:
        </Typography>
              <Typography variant="h3" component="h2">
                Witajcie Punki i Skiny!
        </Typography>
              <Typography variant='h6' className={classes.pos} color="textSecondary">
                Przez około 20 lat działalności na scenie praktycznie nie istnieliśmy w sieci. Ostatecznie kilka lat po "śmierci" oddajemy Wam do poczytania/posłuchania/pooglądania to co po nas jeszcze gdzieś tam zostało, a co wg nas jest na tyle wartościowe, że można to bez większego przypału pokazać. Będzie tu trochę informacji, będzie trochę muzyki, a być może nawet jakieś miejsce do dyskusji, wspomnień , komentarzy. Bardzo nam miło, że tu trafiliście. Może nawet trochę wpisów na okołomuzyczne tematy... Miłego! PUNK`s NOT DEAD!
        </Typography>
              <Typography variant="body2" component="p">
                ZAPRASZAMY!
          </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grow>
      </Container>
    </div >
  );
}

