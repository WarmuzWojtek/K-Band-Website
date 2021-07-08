import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BigMenu from '../Menu/Menu'
import MobileMenu from '../Menu/MobileMenu'
import { useViewport } from '../../Hook/useViewport'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    cursor: 'pointer',
    width: '20%',
    marginLeft: theme.spacing(3),
    '@media(max-width:960px)': {
      width: '30%',
      marginLeft: theme.spacing(1),
    },
    '@media(max-width:660px)': {
      width: '40%',
      marginLeft: theme.spacing(0),
    },
    '@media(max-width:460px)': {
      width: '50%',
    },
  },
  bcg: {
    backgroundColor: 'black',
    height: '10vh',
    justifyContent: 'center',
    padding: theme.spacing(5),
    borderBottom: '5px solid white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-width:660px)': {
      padding: 0,
    },
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const { width } = useViewport();

  function handleReload() {
    window.location = '/';
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.bcg} position="fixed">
        <Toolbar className={classes.toolbar} >
          <img onClick={handleReload} className={classes.logo} src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' />
          {(width < 960) ? <MobileMenu /> : <BigMenu />}
        </Toolbar>
      </AppBar>
    </div>
  );
}