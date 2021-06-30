import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import emailjs from "emailjs-com";
import Paper from '@material-ui/core/Paper';



const CssTextField = withStyles({
  root: {
    // '&>*': {
    //   color: 'white'
    // },

    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'default',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      color: 'white',
      margin: theme.spacing(2),
      width: '80%',
      '@media(max-width:600px)': {
        width: '90%',
      }
    },
  },

  btn: {
    width: '40%',
    color: 'black',
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  title: {
    margin: 0,
    '@media(max-width:860px)': {
      fontSize: '20px'
    }
  }
}));

export default function ContactForm() {
  const classes = useStyles();

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    const emailValidate = emailValue.includes('@');
    if (!emailValidate) return alert('Nieprawidłowy adres email!');
    const nameValidate = nameValue;
    if (!nameValidate) return alert('Przedstaw się proszę!');

    emailjs
      .sendForm(
        "service_ah9886s",
        "first",
        e.target,
        "user_yhqUECd6lLH4jc7e0SRDA"
      )
      .then(
        (result) => {
          alert("Wiadomość wysłana");
          setNameValue("");
          setEmailValue("");
          setMessageValue("");
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  function handleNameChange(e) {
    setNameValue(e.target.value)
  }
  function handleEmailChange(e) {
    setEmailValue(e.target.value)
  }
  function handleMessageChange(e) {
    setMessageValue(e.target.value)
  }

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail}>
        <CssTextField
          id="name"
          label="Imię/Pseudo/Ksywa"
          variant="outlined"
          name="name"
          value={nameValue}
          onChange={handleNameChange} />
        <CssTextField
          type='email'
          id="email"
          label="Twój Email"
          variant="outlined"
          name="email"
          value={emailValue}
          onChange={handleEmailChange} />
        <CssTextField
          id="message"
          label="Wiadomość"
          variant="outlined"
          multiline rows={5}
          name="message"
          value={messageValue}
          onChange={handleMessageChange} />
        <Button type='submit' className={classes.btn} color='default' variant='contained' >wyślij</Button>
      </form>
    </Paper>
  );
}