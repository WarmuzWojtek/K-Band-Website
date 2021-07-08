import { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Post from './Post'
import axios from "axios";


const CssTextField = withStyles({
  root: {
    '&>*': {
      color: 'white'
    },
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
      width: '75%',
      '@media(max-width:660px)': {
        width: '100%',
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
  paper: {
    background: 'rgba(0,0,0,0.2)',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },


}));


export default function GuestBookForm() {

  const classes = useStyles();

  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/backend/guestBookPosts/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => { setLoading(false); });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";

  function handleNameChange(e) {
    setNameValue(e.target.value)
  }
  function handleMessageChange(e) {
    setMessageValue(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();

    const nameValidate = nameValue;
    if (!nameValidate) return alert('Wpisz Imię/Pseudo!');

    const messageValidate = messageValue;
    if (!messageValidate) return alert('Wpisz treść!');

    const post = {
      name: nameValue,
      message: messageValue,
    }

    axios.post('backend/guestBookPosts/add', post)
      .then(alert('Wpis dodany!'))
      ;
    window.location = '/ksiega';
  }

  return (
    <Paper className={classes.paper} elevation={10}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
        <Typography className={classes.title} variant='h4' align='center'>Zostaw coś po sobie...</Typography>

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

        {data.map(post =>
          <Post name={post.name} message={post.message} date={post.createdAt} />
        )}
      </form>
    </Paper>
  );
}