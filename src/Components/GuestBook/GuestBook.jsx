import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GuestBookForm from './GuestBookForm'
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
    desc: {
      fontFamily: 'Nunito',
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


export default function GuestBook() {
  const classes = useStyles();

  return (
    <div className={classes.bcg}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h3'>Księga gości</Typography>
          <Typography className={classes.desc} variant='h6'>Baaaardzo prehistoryczna formuła, ale postaowiłem sprawdzić jak to będzie wyglądało w dzisiejszych czasach. Będzie nam bardzo miło jeśli zostawisz tu coś jeśli będziesz miał/miała ochotę. Jeśli natomiast masz jakąś sprawę i liczysz na odpowiedź po zapraszamy na maila lub do formularza kontaktowego. </Typography>
          <GuestBookForm />
        </Container>
      </Slide>
    </div >
  );
}
