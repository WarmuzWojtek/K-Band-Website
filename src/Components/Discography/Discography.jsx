import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import { tapes } from '../../Constants/Recordings'
import SmallRecordingCard from "./SmallRecordings"
import { recordings } from '../../Constants/Recordings'


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: theme.spacing(5),
      margin: '0 auto',
      '@media(max-width:660px)': {
        padding: theme.spacing(2),
      },
      '@media(max-width:460px)': {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },

    },
    title: {
      fontFamily: 'Mustasurma',
      fontSize: '54px',
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid black',
      textAlign: 'center',
      color: 'black',
      '@media(max-width:460px)': {
        fontSize: '36px',
      },
    },
    desc: {
      color: 'black',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    },
    bcg: {
      background: 'linear-gradient(40deg, #222222,#e6e4e3,#222222)',
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
          <Typography className={classes.title} variant='h4'>Nagrania</Typography>
          <Typography className={classes.desc} variant='h6'>{recordings} </Typography>
          {tapes.map((tape, index) =>
            <SmallRecordingCard key={tape.title} title={tape.title} year={tape.year} label={tape.label} medium={tape.medium} foto={tape.foto} id={index} />)}
        </Container>
      </Slide>
    </div >
  );
}
