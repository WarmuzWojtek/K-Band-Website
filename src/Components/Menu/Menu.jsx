import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'none',
      flexGrow: 1,
    },
    item: {
      display: "inline",
      color: 'white',
      margin: theme.spacing(2),
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        borderBottom: '3px solid white',
        color: theme.palette.secondary,
      },
    },

  }
});

export default function BigMenu() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography className={classes.item} >Ludzie</Typography>


      <Typography className={classes.item} >Miejsca</Typography>


      <Typography className={classes.item} >Dyskografia</Typography>


      <Typography className={classes.item} >Media</Typography>


      <Typography className={classes.item} >Archiwalia</Typography>


      <Typography className={classes.item} >Księga gości</Typography>

      <Typography className={classes.item} >Kontakt</Typography>

    </div>
  );
}