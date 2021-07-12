import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MediaControlCard from './AudioControls'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgba(220,220,220,1)',
    border: '2px solid #000',
    boxShadow: theme.shadows[15],
    padding: theme.spacing(2, 4, 3),
    maxHeight: '70vh',
    borderRadius: '5px',
  },
  btn: {
    margin: '0 auto',
  }
}));

export default function TransitionsModal({ title, link, foto }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isDisabled = link ? false : true;

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={handleOpen} variant="outlined" size='small' disabled={isDisabled}>
        Posłuchaj
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
          <div className={classes.paper}>
            <MediaControlCard title={title} link={link} foto={foto} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}