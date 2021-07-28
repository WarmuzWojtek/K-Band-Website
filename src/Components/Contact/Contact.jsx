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
    link: {
      color: 'blue',
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

