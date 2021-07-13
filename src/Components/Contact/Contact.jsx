import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ContactForm from './ContactForm'
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
      minHeight: '90vh',
    },
    link: {
      color: 'black',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    }

  }
})


export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h4'>Kontakt z nami</Typography>
          <Typography className={classes.desc} variant='h6'>Jeśli masz jakąś sprawę/pytanie pisz na  <a className={classes.link} href="mailto:kastracjapunx@gmail.com">kastracjapunx@gmail.com </a>  lub za pomocą poniższego formularza. Na powyższego maila ślijcie też proszę jeśli jesteście w posiadaniu jakichkolwiek archiwaliów z nami związanych. Możemy wspólnie tworzyć to miejsce!</Typography>
          <ContactForm />
        </Container>
      </Slide>
    </div >
  );
}

