import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TransitionsModal from '../AudioModal/AudioModal'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 345,
    marginBottom: theme.spacing(5),
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: theme.spacing(4),
    '@media(max-width:660px)': {
      padding: theme.spacing(1),
    },
  },
  title: {
    textAlign: 'center',
    borderBottom: '2px solid black',
    marginBottom: theme.spacing(4),
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: theme.spacing(2),
    '@media(max-width:660px)': {
      flexWrap: 'wrap',
      padding: theme.spacing(1),
    },
  },
  aspectWrapper: {
    width: '40%',
    '@media(max-width:660px)': {
      width: '100%',
    },
  },
  media: {
    transition: '0.3s',
    boxShadow: '0 0 5px 5px grey',
    height: 0,
    paddingTop: '143.75%',
    '&:hover': {
      boxShadow: 'none',
    }

  },
  content: {
    width: '40%',
    '@media(max-width:660px)': {
      width: '100%',
    },
  },
  expand: {
    background: 'lightgray',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.medium,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  songs: {
    display: 'block',
  },
  songItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },

}));

export default function CasetteCard({ title, year, label, medium, foto, description, songs }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={12}>
      <CardHeader
        className={classes.title}
        title={title}
        subheader={'Data wydania: ' + year + '    Nośnik: ' + medium}
      />
      <div className={classes.wrapper}>
        <div className={classes.aspectWrapper}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + foto}
            title=""
          />
        </div>
        <CardContent className={classes.content}>
          {songs.map(song =>
            <div className={classes.songItem}>
              <Typography variant='subtitle' className={classes.songs}>{song}</Typography>
              <TransitionsModal title={song} />
            </div>
          )}
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {medium}
          </Typography>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}