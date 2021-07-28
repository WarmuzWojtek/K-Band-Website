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
      '@media(max-width:460px)': {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      }

    },
    title: {
      lineHeight: '100px',
      fontFamily: 'Mustasurma',
      fontSize: '54px',
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid black',
      textAlign: 'center',
      color: 'black',
      '@media(max-width:460px)': {
        fontSize: '36px',
        lineHeight: '72px',
      },
    },
    desc: {
      fontFamily: 'Nunito',
      color: 'black',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    },
    bcg: {
      background: 'linear-gradient(40deg, #aaaaaa,#f2f2f2,#aaaaaa)',
      paddingTop: theme.spacing(1),
      marginTop: '10vh',
    },
    textPaper: {
      color: 'black',
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
          <Typography className={classes.title} variant='h4'>Miejsca</Typography>
          <Typography className={classes.desc} variant='h6'>{placesSubtitle}</Typography>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle} align='right'>{places[0].name}</Typography>
            <Typography className={classes.place} variant='h6' align='justify'>{places[0].description}</Typography>
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/sckm.jpg'} />
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/loch.jpg'} />
          </Paper>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle}>{places[1].name}</Typography>
            <Typography className={classes.place} variant='h6' align='justify'>{places[1].description}</Typography>
          </Paper>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle} align='right'>{places[2].name}</Typography>
            <Typography className={classes.place} variant='h6' align='justify'>{places[2].description}</Typography>
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/salka.jpg'} />
          </Paper>
        </Container>
      </Slide>
    </div >
  );
}