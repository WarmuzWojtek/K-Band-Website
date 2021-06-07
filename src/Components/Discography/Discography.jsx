import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CasetteCard from './Tape'
import CdCard from './Cd'
import { Maly, Rudy, Katiap, Jedrek, Kaszka, PeopleDecs } from '../../Constants/Friends'
import Slide from '@material-ui/core/Slide';
import { tapes, cds } from '../../Constants/Recordings'


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


export default function Discography() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h2'>Nagrania</Typography>
          <Typography className={classes.desc} variant='h6'>{PeopleDecs} </Typography>
          {tapes.map(tape =>
            <CasetteCard title={tape.title} year={tape.year} label={tape.year} medium={tape.medium} foto={tape.foto} description={tape.description} songs={tape.songs} />)}
          {cds.map(cd =>
            <CdCard title={cd.title} year={cd.year} label={cd.year} medium={cd.medium} foto={cd.foto} description={cd.description} songs={cd.songs} />
          )}
        </Container>
      </Slide>
    </div >
  );
}
