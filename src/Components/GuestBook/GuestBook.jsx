import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GuestBookForm from './GuestBookForm'
import Slide from '@material-ui/core/Slide';

import { useState, useEffect } from "react";
import axios from "axios";




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
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid white',
      textAlign: 'center',
      color: 'white',
    },
    desc: {
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

  // const[data, setData]=useState(null);
  // const[loading, setLoading]=useState(true);
  // const[error, setError]=useState(null);
  // useEffect(()=>{axios.get("http://localhost:8000")
  // .then((response)=>{setData(response.data);
  // })
  // .catch((error)=>{console.error("Error fetching data: ", error);
  // setError(error);})
  // .finally(()=>{setLoading(false);});},[]);
  // if(loading)return"Loading...";
  // if(error)return"Error!";







  return (
    <div className={classes.bcg}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h2'>Księga gości</Typography>
          <Typography className={classes.desc} variant='h6'>Baaaardzo prehistoryczna formuła, ale postaowiłem sprawdzić jak to będzie wyglądało w dzisiejszych czasach. Będzie nam bardzo miło jeśli zostawisz tu coś jeśli będziesz miał/miała ochotę. Jeśli natomiast masz jakąś sprawę i liczysz na odpowiedź po zapraszamy na maila lub do formularza kontaktowego. </Typography>
          <GuestBookForm />
          {/* <Typography>{data}</Typography> */}
        </Container>
      </Slide>
    </div >
  );
}
