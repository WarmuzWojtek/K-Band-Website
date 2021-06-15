import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({

  menuIcon: {
    fontSize: '2em',
    '@media(max-width:460px)': {
      fontSize: '1.8em',
    },
  },

}));

export default function MobileMenu() {
  const classes = useStyles();
  return (
    <IconButton edge="start" color="inherit" aria-label="menu" >
      <MenuIcon className={classes.menuIcon} />
    </IconButton>
  )
}

