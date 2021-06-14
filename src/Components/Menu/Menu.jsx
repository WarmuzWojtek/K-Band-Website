import React from 'react';
import { NavLink } from "react-router-dom";
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
      <NavLink to="/ludzie" className={classes.item}>Ludzie</NavLink>
      <NavLink to="/miejsca" className={classes.item}>Miejsca</NavLink>
      <NavLink to="/plyty" className={classes.item}>Dyskografia</NavLink>
      <NavLink to="/media" className={classes.item}>Media</NavLink>
      <NavLink to="/archiwalia" className={classes.item}>Archiwalia</NavLink>
      <NavLink to="/ksiega" className={classes.item}>Księga gości</NavLink>
      <NavLink to="/kontakt" className={classes.item}>Kontakt</NavLink>
    </div>
  );
}