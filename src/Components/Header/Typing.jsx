import React, { useEffect } from "react";
import { init } from "ityped";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    typing: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Nunito',
      '@media(max-width:960px)': {
        fontSize: '40px',

      },
      '@media(max-width:660px)': {
        fontSize: '30px',

      },
      '@media(max-width:360px)': {
        fontSize: '22px',

      },
    },
  }
})

export default function Typing() {
  const classes = useStyles();
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: [
        "Dyskografia, nagrania, clipy",
        "Historia zespołu, relacje z koncertów i wydarzeń",
        "Nie publikowane wcześniej nagrania!"
      ]
    });
  }, []);

  return <Typography variant='h2' className={classes.typing} id="myElement"></Typography>;
}