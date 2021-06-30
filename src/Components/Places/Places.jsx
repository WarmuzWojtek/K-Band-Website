import { Container, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import { places, placesSubtitle } from '../../Constants/Places'
import '../../App.css'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: theme.spacing(5),
      margin: '0 auto',

    },
    title: {
      fontFamily: 'Nunito',
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid white',
      textAlign: 'center',
      color: 'white',
    },
    desc: {
      fontFamily: 'Nunito',
      color: 'white',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    },
    bcg: {
      background: 'linear-gradient(40deg, #000000,#a7a6a5,#000000)',
      marginTop: '10vh',
    },
    textPaper: {
      color: 'white',
      background: 'none',
      width: '70%',
      marginTop: theme.spacing(5),
      '@media(max-width:860px)': {
        width: '100%',
      }
    },
    imagesPaper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(5),
      background: 'none',
      width: '30%',
      '@media(max-width:860px)': {
        width: '100%',
      }
    },
    place: {
      fontFamily: 'Nunito',
    },
    placeImage: {
      display: 'block',
      width: '80%',
      margin: '0 auto',
    },
    placeTitle: {
      fontFamily: 'Nunito',
      marginBottom: theme.spacing(3),
    }

  }
})


export default function Places() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h3'>Miejsca</Typography>
          <Typography className={classes.desc} variant='h6'>{placesSubtitle}</Typography>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle} align='right'>{places[0].name}</Typography>
            <Typography className={classes.place} variant='subtitle1' align='justify'>{places[0].description}</Typography>
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/sckm.jpg'} />
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/loch.jpg'} />
          </Paper>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle}>{places[1].name}</Typography>
            <Typography className={classes.place} variant='body1' align='justify'>{places[1].description}</Typography>
          </Paper>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle} align='right'>{places[2].name}</Typography>
            <Typography className={classes.place} variant='body1' align='justify'>{places[2].description}</Typography>
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/sckm.jpg'} />
          </Paper>
        </Container>
      </Slide>
    </div >
  );
}