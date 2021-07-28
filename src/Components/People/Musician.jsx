import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../App.css'
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

import Backdrop from '@material-ui/core/Backdrop';



const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      fontFamily: 'Nunito',
      color: 'white',
      width: 345,
      maxWidth: 345,
      marginBottom: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      background: 'linear-gradient(40deg, #000000,#c6c4c3,#000000)'
      // backgroundColor: 'rgba(80,80,80,0.9)',
      // backgroundColor: 'rgba(255,255,255,0.6)',
      // color: 'black',

    },
    image: {
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      transition: '0.3s',
      '&:hover': {
        transform: 'translate(-10% -10%)',
        width: '110%',
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(40deg, #000000,#c6c4c3,#000000)'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxHeight: '70vh',
      overflowY: 'scroll',
    },
    btn: {
      margin: '0 auto',
      color: 'black',
    },
    btnContainer: {
      justifySelf: 'flex-end',
    },
    moreInfo: {
      display: 'flex',
      margin: theme.spacing(0, 1),
      padding: theme.spacing(2),
      backgroundSize: 'cover',
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: 445,
      minHeight: 345,
    },
    info: {
      alignSelf: 'center',
      textAlign: 'center',
      color: 'white',
      fontSize: '20px',
      fontFamily: 'Bohemian Typewriter',
      '@media(max-width:460px)': {
        fontSize: '18px',

      },
      '@media(max-width:360px)': {
        fontSize: '14px',

      },
    }
  }
});

export default function MusicianCard({ name, foto, desc, more }) {

  const classes = useStyles();
  const url = foto;
  const person = name;
  const role = desc;
  const info = more;



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (

    <Card className={classes.root} elevation={24}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt={person}
          height="345"
          image={process.env.PUBLIC_URL + url}
          title={person}
        />
        <CardContent >
          <Typography gutterBottom variant="h4" component="p" style={{ fontFamily: 'Nunito', textAlign: 'center', }}>
            {name}
          </Typography>
          <Typography variant="h6" color="inherit" component="p" style={{ fontFamily: 'Nunito', textAlign: 'center', }}>
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnContainer}>
        <Button className={classes.btn} size="small" color="default" onClick={handleOpen} variant='contained'>
          więcej info
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Paper className={classes.moreInfo} elevation={24} >
              <Typography className={classes.info}>{info}</Typography>
            </Paper>
          </Fade>
        </Modal>
      </CardActions>


    </Card>
  );
}