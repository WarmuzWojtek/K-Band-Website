import { Container, Paper, Typography } from "@material-ui/core"
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

    },
    title: {
      fontFamily: 'Nunito',
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid white',
      textAlign: 'center',
      color: 'white',
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
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h3'>Wszystko w swoim czasie :)</Typography>

        </Container>
      </Slide>
    </div >
  );
}

