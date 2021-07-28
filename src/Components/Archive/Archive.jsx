import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import '../../App.css'


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: theme.spacing(5),
      margin: '0 auto',
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
    bcg: {
      background: 'linear-gradient(40deg, #000000,#c6c4c3,#000000)',
      marginTop: '10vh',
      minHeight: '90vh',
    },
  }
})


export default function Archive() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h4'>Wszystko w swoim czasie :)</Typography>
        </Container>
      </Slide>
    </div >
  );
}

