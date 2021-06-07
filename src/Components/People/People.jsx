import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MusicianCard from './Musician'
import Slide from '@material-ui/core/Slide';
import { people, PeopleDecs } from '../../Constants/Friends'



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
    desc: {
      color: 'white',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    },
    bcg: {
      background: 'linear-gradient(40deg, #000000,#c6c4c3,#000000)',
      marginTop: '10vh',
    }
  }
})


export default function People() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h2'>Ludzie</Typography>
          <Typography className={classes.desc} variant='h6'>{PeopleDecs} </Typography>
          {people.map(musician =>
            <MusicianCard name={musician.name} foto={musician.foto} desc={musician.desc} />
          )}
        </Container>
      </Slide>
    </div >
  );
}
