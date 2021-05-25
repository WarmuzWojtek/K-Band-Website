import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MusicianCard from './Musician'
import { Maly, Rudy, Katiap, Jedrek, Kaszka } from '../../Constants/Friends'


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: theme.spacing(5),
      margin: '0 auto',

    },
    title: {
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid white',
      textAlign: 'center',
      color: 'white',
    },
    bcg: {
      backgroundColor: 'black',
      marginTop: '10vh',
    }
  }
})


export default function People() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Container className={classes.root}>
        <Typography className={classes.title} variant='h2'>Ludzie</Typography>
        <MusicianCard name={Maly.name} foto={Maly.foto} desc={Maly.desc} />
        <MusicianCard name={Jedrek.name} foto={Jedrek.foto} desc={Jedrek.desc} />
        <MusicianCard name={Rudy.name} foto={Rudy.foto} desc={Rudy.desc} />
        <MusicianCard name={Katiap.name} foto={Katiap.foto} desc={Katiap.desc} />
        <MusicianCard name={Kaszka.name} foto={Kaszka.foto} desc={Kaszka.desc} />
      </Container>
    </div>
  );
}

