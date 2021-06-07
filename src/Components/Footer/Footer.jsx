import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      background: 'black',
      height: 50,
      borderTop: '5px solid white',
    },
    item: {
      color: 'white',
      marginLeft: theme.spacing(5),
    },

  }
});

export default function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography className={classes.item} >&copy; Rudeboy Design 2021 </Typography>

    </div>
  );
}