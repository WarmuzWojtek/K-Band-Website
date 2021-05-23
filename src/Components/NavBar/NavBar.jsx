import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BigMenu from '../Menu/Menu'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo:{
    width:'20%',
    marginLeft:theme.spacing(3),
  },
  bcg:{
    backgroundColor:'black',
    height:'10vh',
    justifyContent:'center',
    padding:theme.spacing(5),
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bcg} position="fixed">
        <Toolbar >
          <img className={classes.logo} src={process.env.PUBLIC_URL+'/images/logo.png' } alt='logo'/>
          <BigMenu />
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}