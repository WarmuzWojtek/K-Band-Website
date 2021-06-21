import Coverflows from "./Coverflow";
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      margin: 0,
      backgroundColor: 'black',
      paddingTop: theme.spacing(10),
    },
    container: {

    },
    title: {
      fontFamily: 'Nunito',
      color: 'white',
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
    content: {
      fontFamily: 'Nunito',
      color: 'white',
      textAlign: 'center',
    }

  }
});

export default function MusicAtHomePge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant='h3'>Chcesz posłuchać ?</Typography>
        <Typography className={classes.content} variant='h5'>W dziale 'Dyskografia' znajdziesz zarówno najstarsze rzeczy z początków działalności, póżniejsze wydawnictwa, jak i nigdy nigdzie nie publikowane jeszcze utwory! </Typography>
        <Coverflows />
      </Container>
    </div>
  )

}