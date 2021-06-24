import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CasetteCard from '../Tapes'
// import CdCard from './Cds'
import { PeopleDecs } from '../../../Constants/Friends'
import Slide from '@material-ui/core/Slide';
import { tapes, cds } from '../../../Constants/Recordings'
import SmallCasetteCard from '../SmallTapes'
import { NavLink } from "react-router-dom";


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


export default function FirstCasette() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          {/* <Typography className={classes.title} variant='h3'>Nagrania</Typography>
          <Typography className={classes.desc} variant='h6'>{PeopleDecs} </Typography> */}
          <CasetteCard title={tapes[0].title} year={tapes[0].year} label={tapes[0].year} medium={tapes[0].medium} foto={tapes[0].foto} description={tapes[0].description} songs={tapes[0].songs} />
        </Container>
      </Slide>
    </div >
  );
}