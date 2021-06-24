import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 450,
    backgroundPosition: 'right bottom',
    backgroundSize: '15%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  image: {
    width: 200,
    height: 200,
    '@media(max-width:600px)': {
      width: 345,
      height: 345,
    },

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  typo: {
    '@media(max-width:600px)': {
      textAlign: 'center',
    },
  },
  btn: {
    '@media(max-width:600px)': {
      display: 'flex',
      margin: '0 auto',
    },
  },
  link: {
    textDecoration: 'none',
  }
}));

export default function SmallCasetteCard({ title, year, label, medium, foto }) {
  const classes = useStyles();

  const path = "/" + year;

  return (
    <div className={classes.root} >
      <Paper className={classes.paper} elevation={10} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'images/punkpin.png'})`, }}>
        <Grid container spacing={2}>
          <Grid item>
            <NavLink to={path} >
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={process.env.PUBLIC_URL + foto} />
              </ButtonBase>
            </NavLink>
          </Grid>
          <Grid item xs={12} sm container >
            <Grid item xs container direction="column" spacing={2} className={classes.content}>
              <Grid item xs>
                <Typography className={classes.typo} gutterBottom variant="h6">
                  {title}
                </Typography>
                <Typography className={classes.typo} variant="body2" gutterBottom>
                  {year + '  ' + label}
                </Typography>
                <Typography className={classes.typo} variant="body2" color="textSecondary">
                  {medium}
                </Typography>
              </Grid>
              <Grid item>
                <NavLink to={path} className={classes.link}>
                  <Button className={classes.btn} variant='contained' color='default'>Pokaż Więcej</Button>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}