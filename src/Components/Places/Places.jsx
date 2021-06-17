import { Container, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import '../../App.css'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: theme.spacing(5),
      margin: '0 auto',

    },
    title: {
      fontFamily: 'Nunito',
      width: '100%',
      marginBottom: theme.spacing(5),
      borderBottom: '3px solid white',
      textAlign: 'center',
      color: 'white',
    },
    desc: {
      fontFamily: 'Nunito',
      color: 'white',
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    },
    bcg: {
      background: 'linear-gradient(40deg, #000000,#a7a6a5,#000000)',
      marginTop: '10vh',
    },
    textPaper: {
      color: 'white',
      background: 'none',
      width: '70%',
      marginTop: theme.spacing(5),
      '@media(max-width:860px)': {
        width: '100%',
      }
    },
    imagesPaper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(5),
      background: 'none',
      width: '30%',
      '@media(max-width:860px)': {
        width: '100%',
      }
    },
    place: {
      fontFamily: 'Nunito',
    },
    placeImage: {
      display: 'block',
      width: '80%',
      margin: '0 auto',
    },
    placeTitle: {
      fontFamily: 'Nunito',
      marginBottom: theme.spacing(3),
    }

  }
})


export default function Places() {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Typography className={classes.title} variant='h3'>Miejsca</Typography>
          <Typography className={classes.desc} variant='h6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, vel harum! Aliquam, obcaecati repudiandae vel ad similique vitae labore voluptatum facere nobis doloribus voluptatem magnam quaerat neque aperiam blanditiis, quidem in. Deserunt itaque atque nobis consequuntur mollitia asperiores distinctio accusamus quidem dolor eaque aperiam sequi perspiciatis rerum possimus maxime libero quisquam impedit, enim facere deleniti quibusdam reprehenderit laudantium earum odio. Quis labore deleniti veritatis laboriosam ipsam voluptas temporibus expedita distinctio laudantium  </Typography>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle} align='right'>Staromiejskie Centrum Kultury Młodzieży</Typography>
            <Typography className={classes.place} variant='subtitle1' align='justify'>To tutaj wszystko się zaczęło.... W roku szkolnym 91/92 trafiliśmy w to miejsce za sprawą nauczycielki muzyki z technikum Jędrka, która jednocześnie tu pracowała. Na pierwszą próbę
              przyszliśmy we trzech z Marcinem i Jędrkiem. Próbowaliśmy grać "Ustrzyki" KSU i "Hutę", którą to
              Jędrek napisał chyba jeszcze zanim zagraliśmy jakąkolwiek próbę. A potem już poszło i spędziliśmy w
              tym miejscu trochę czasu. Minusem było to, że nie dało się tu robić typowo "rock`and`rollowych prób,
              ale przeważyło to, że nie mieliśmy do grania kompletnie niczego prócz zapału, a tu było wszystko!
              Niedługo potem Jędrek przeskoczył na wokal, a dołączyli: Mały na gitarę i Darek na bas. To tutaj
              powstało większość utworów z pierwszych dwóch materiałów zepołu. W międzyczasie grywaliśmy też próby
              w jakichś szkołach, przedszkolach, a bywało , że i u mnie w domu, ale zawsze tu
              wracaliśmy...generalnie przez pierwszy etap działalności (do 1996 roku) byliśmy mocno z tym miejscem
              związani...W międzyczasie, na przełomie 1994/1995 roku Darka na basie zastąpił Kaszka, jedyna osoba
              w zespole mająca jakiekolwiek pojęcie o muzyce.</Typography>
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/sckm.jpg'} />
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/loch.jpg'} />
          </Paper>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle}>Loch Ness</Typography>
            <Typography className={classes.place} variant='body1' align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis, minima, asperiores omnis distinctio, illo numquam perferendis ut similique laboriosam earum iste! Consectetur facilis vitae fuga voluptatem ipsam! Vitae incidunt magnam enim aliquid dolores, nulla sapiente! Facere sint fugit, doloribus veritatis, eligendi fugiat eveniet quo error debitis quae corrupti. Enim eveniet cum minima, quod tempora facilis nihil eius sapiente quibusdam perferendis impedit, quos unde veritatis. Obcaecati vero, delectus error similique, ratione optio veniam quo ipsam distinctio architecto porro voluptatibus! Ipsum velit animi consectetur ea minima autem, eveniet possimus ducimus ad, facilis eum qui mollitia ipsa praesentium maiores ullam neque eligendi.</Typography>
          </Paper>
          <Paper className={classes.textPaper} elevation={0}>
            <Typography variant='h5' className={classes.placeTitle} align='right'>Salka u Kacy</Typography>
            <Typography className={classes.place} variant='body1' align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat, sapiente cum facilis unde ex impedit omnis alias dolores praesentium quia eveniet accusantium distinctio tempora ullam autem porro rem recusandae voluptate quaerat corporis libero, labore, itaque veniam. Neque, fuga, eius quam eos debitis nisi ea pariatur eaque unde accusamus laudantium officia ex consectetur ipsum. Dolorum obcaecati, odio impedit inventore architecto eum blanditiis praesentium aut a saepe dignissimos laboriosam, dicta vel iure aperiam eos ducimus quisquam hic expedita sint non possimus quod deserunt? Tempore aut culpa voluptate possimus facilis quasi quas ratione quod. Laborum, quam at sapiente eos repellat corrupti amet optio consequatur expedita, fuga id sequi facere voluptate dolores tenetur facilis ipsum quasi libero eveniet dolorum iure maiores? Reiciendis sapiente, eius inventore quisquam quidem magnam in, maiores dolorem, accusantium voluptatibus placeat at illum sequi totam! Officiis perferendis quam alias aspernatur animi nisi tenetur natus consectetur ratione numquam. Possimus veniam quo odio atque doloribus hic. Dolorem perspiciatis pariatur tempore minima, ullam repellendus recusandae ipsum. Labore dolore voluptates voluptatem eaque iusto ducimus deleniti a perspiciatis modi, dicta nobis similique officiis repellat dignissimos dolorum amet doloremque facere optio aut. Dignissimos, suscipit eum sed nam ducimus iure, quia maxime debitis minus neque nesciunt sit?</Typography>
          </Paper>
          <Paper className={classes.imagesPaper} elevation={0}>
            <img className={classes.placeImage} alt='' src={process.env.PUBLIC_URL + '/images/sckm.jpg'} />
          </Paper>
        </Container>
      </Slide>
    </div >
  );
}