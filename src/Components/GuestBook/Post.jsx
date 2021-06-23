import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import '../../App.css'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: 'rgba(0,0,0,0.3)',
      color: 'white',
      padding: theme.spacing(2),

    },
    typoName: {
      fontFamily: 'Nunito',
    },
    typoMessage: {
      fontFamily: 'Nunito',
    },
    typoDate: {
      fontSize: '18px',
      textAlign: 'right',
      fontFamily: 'Nunito',
      '@media(max-width:960px)': {
        fontSize: '16px'
      },
      '@media(max-width:660px)': {
        fontSize: '14px'
      },
    }

  }
});

export default function Post({ name, message, date }) {
  const classes = useStyles();
  const userName = name;
  const text = message;
  const addedAt = moment(date).format('LL');


  return (
    <Paper elevation={10} className={classes.root}>
      <Typography variant='h5'>{text}</Typography>
      <Typography variant='body'>dodane przez: {userName}</Typography>
      <Typography className={classes.typoDate} variant='h6'>{addedAt} </Typography>
    </Paper>
  );
}