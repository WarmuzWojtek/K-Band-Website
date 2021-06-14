import { useState } from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core';

const CssTextField = withStyles({
  root: {

    '& label.Mui-focused': {
      color: '#eeeeee',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#eeeeee',
      },
      '&:hover fieldset': {
        borderColor: '#eeeeee',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#eeeeee',
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
      margin: theme.spacing(2),
      width: '80%',
      '@media(max-width:600px)': {
        width: '90%',
      }
    },
  },
  btn: {
    width: '40%',
  },
  title: {
    color: 'white',
    margin: 0,
    '@media(max-width:860px)': {
      fontSize: '20px'
    }
  },

}));

export default function GuestBookForm() {
  const classes = useStyles();

  const [nameValue, setNameValue] = useState('');

  const [messageValue, setMessageValue] = useState('');





  function handleNameChange(e) {
    setNameValue(e.target.value)
  }
  function handleMessageChange(e) {
    setMessageValue(e.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <Typography className={classes.title} variant='h4' align='center'>Zostaw coś po sobie...</Typography>
      <Paper>
        <Typography variant='h4'>Bardzo fajny zespół</Typography>
        <Typography variant='h6'>bruno Mars</Typography>
      </Paper>
      <CssTextField
        id="name"
        label="Imię/Ksywa/Pseudo"
        variant="outlined"
        name="name"
        value={nameValue}
        onChange={handleNameChange}
      />

      <CssTextField
        id="message"
        label="Wiadomość"
        variant="outlined"
        multiline rows={5}
        name="message"
        value={messageValue}
        onChange={handleMessageChange} />
      <Button type='submit' className={classes.btn} color='disabled' variant='contained' >wyślij</Button>
    </form>
  );
}