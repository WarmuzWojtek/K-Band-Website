import React from 'react';
import '../../App.css'
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useState } from 'react';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'none',
      flexGrow: 1,
    },
    item: {
      minWidth: '10%',
      textAlign: 'center',
      textDecoration: 'none',
      display: "inline",
      color: 'white',
      margin: theme.spacing(1),
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        borderBottom: '2px solid white',
        fontWeight: 'bold',
      },
    },



  }
});

export default function BigMenu() {

  const classes = useStyles();

  return (
    <div id='menu' className={classes.root}>
      <NavLink to="/ludzie" className={classes.item} >Ludzie</NavLink>
      <NavLink to="/miejsca" className={classes.item}>Miejsca</NavLink>
      <NavLink to="/plyty" className={classes.item}>Dyskografia</NavLink>
      <NavLink to="/media" className={classes.item}>Media</NavLink>
      <NavLink to="/archiwalia" className={classes.item}>Archiwalia</NavLink>
      <NavLink to="/ksiega" className={classes.item}>Księga gości</NavLink>
      <NavLink to="/kontakt" className={classes.item}>Kontakt</NavLink>
    </div>
  );
}