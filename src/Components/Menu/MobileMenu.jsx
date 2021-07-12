import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

  menuIcon: {
    fontSize: '2em',
    '@media(max-width:460px)': {
      fontSize: '1.8em',
    },
    '@media(max-width:360px)': {
      fontSize: '1.2em',
      // marginRight: theme.spacing(2),
    },
  },
  item: {
    textDecoration: 'none',
    color: 'black',
  }

}));

export default function MobileMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/ludzie" className={classes.item} >
          <MenuItem onClick={handleClose}>Ludzie</MenuItem>
        </NavLink>
        <NavLink to="/miejsca" className={classes.item}>
          <MenuItem onClick={handleClose}>Miejsca</MenuItem>
        </NavLink>
        <NavLink to="/plyty" className={classes.item}>
          <MenuItem onClick={handleClose}>Dyskografia</MenuItem>
        </NavLink>
        <NavLink to="/media" className={classes.item}>
          <MenuItem onClick={handleClose}>Media</MenuItem>
        </NavLink>
        <NavLink to="/archiwalia" className={classes.item}>
          <MenuItem onClick={handleClose}>Archiwalia</MenuItem>
        </NavLink>
        <NavLink to="/ksiega" className={classes.item}>
          <MenuItem onClick={handleClose}>Księga Gości</MenuItem>
        </NavLink>
        <NavLink to="/kontakt" className={classes.item}>
          <MenuItem onClick={handleClose}>Kontakt</MenuItem>
        </NavLink>
      </Menu>
    </>
  )
}



