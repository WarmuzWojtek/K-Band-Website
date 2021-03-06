import { Container, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import '../../App.css'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: theme.spacing(5),
      margin: '0 auto',
      '@media(max-width:460px)': {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },

    },
    title: {
      lineHeight: '100px',
      fontFamily: 'Mustasurma',
      fontSize: '54px',
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid black',
      textAlign: 'center',
      color: 'black',
      '@media(max-width:460px)': {
        fontSize: '36px',
        lineHeight: '72px',
      },
    },
    desc: {
      fontFamily: 'Nunito',
      color: 'black',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    },
    bcg: {
      background: 'linear-gradient(40deg, #aaaaaa,#f2f2f2,#aaaaaa)',
      paddingTop: theme.spacing(1),
      marginTop: '10vh',
    },
    videoCard: {
      background: 'rgba(0,0,0,0.2)',
      width: 560,
      color: 'white',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'space-between',
      '@media(max-width:600px)': {
        width: 320,
        height: 'auto',
      },
      '@media(max-width:320px)': {
        width: 300,
        height: 'auto',
      },

    },
    videoDecsription: {
      marginBottom: theme.spacing(1),
      color: 'black',
    },
    frame: {
      width: 560,
      height: 315,
      '@media(max-width:600px)': {
        width: 320,
        height: 'auto',
      },
    }
  }
})


export default function Media() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h4'>Media</Typography>
          <Typography className={classes.desc} variant='h6'>Tutaj jakie?? video, kt??re po nas zosta??y, zwykle montowane domowym sposobem przez J??drka... Nie ma tego wiele na YT, a do tego wi??kszo???? kompletnie nieopisana. Przy okazji - jakby kto?? mia?? gdzie?? nagrane jakie?? starocie z nami to piszcie - ch??tnie przyganiemy na potrzeby tego miejsca.</Typography>
          <Paper className={classes.videoCard} elevation={5}>
            <Typography className={classes.videoDecsription}>Jedyny w naszej historii 'clip' zrealizowany z pomoc?? koleg??w na krakowskim Solvayu i w LochNessie. Wszystko dzia??o si?? w 2004 roku przy okazji wydania p??yty w Jimmy Jazz Records </Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KLJqFJjP5R4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Paper>
          <Paper className={classes.videoCard} elevation={5}>
            <Typography className={classes.videoDecsription}>Punkowa Orkiestra ??wi??tecznej Pomocy, stycze?? 1996, hala Korony, oko??o 1 w nocy :)  </Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/F_7OHsF2V-E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Paper> <Paper className={classes.videoCard} elevation={5}>
            <Typography className={classes.videoDecsription}>Video nagrane na pr??bie w salce u Kacy, chyba oko??o 2009 roku. </Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cEpHk11CrN4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Paper>
          <Paper className={classes.videoCard} elevation={5}>
            <Typography className={classes.videoDecsription}>"To co by??o" to nigdy nie wydane nagranie zrealizowane w 2005 roku w Diamond Recordings Studio. Video to sklejka jakich?? starych fotek zrobiona przez J??drka  </Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XfhhcahqvzY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Paper>
        </Container>
      </Slide>
    </div >
  );
}

