import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CasetteCard from './Tapes'
import Slide from '@material-ui/core/Slide';
import { tapes } from '../../Constants/Recordings'
import CdCard from './Cds'


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
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
      },

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


export default function RecordingCard({ match }) {
  const classes = useStyles();

  const id = match.params.id.slice(1, 2);

  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          {id < 3 ?
            <CasetteCard title={tapes[id].title} year={tapes[id].year} label={tapes[id].label} medium={tapes[id].medium} foto={tapes[id].foto} description={tapes[id].description} songs={tapes[id].songs} /> :
            <CdCard title={tapes[id].title} year={tapes[id].year} label={tapes[id].label} medium={tapes[id].medium} foto={tapes[id].foto} description={tapes[id].description} songs={tapes[id].songs} />}
        </Container>
      </Slide>
    </div >
  );
}