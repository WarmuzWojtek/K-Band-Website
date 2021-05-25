import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '90vh',
            marginTop: '10vh',

        },
        carouselPaper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            background: 'none',
        },
        carousel: {
            width: '100%',
        },
        typoPaper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
            background: 'none',
        },
        legend: {
            fontSize: '25px',
        },
        typo: {
            fontFamily: 'Nunito',
            color: 'white',
        }

    }
});

function PhotoCarousel() {
    const classes = useStyles();

    return (

        <Carousel autoPlay interval={5000} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop className={classes.carousel}>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/a.jpg'} alt='' />
                <p className='legend'>Historia,koncerty, wydawnictwa</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/b.jpg'} alt='' />
                <p className='legend' >Nigdzie nie publikowane dotąd nagrania</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/d.jpg'} alt='' />
                <p className='legend' >Archiwalia, Newsy, Komentarze</p>
            </div>
        </Carousel>

    );
};

export default function Header() {
    const classes = useStyles();
    return (
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'images/graffiti.jpg'})` }}>
            <Container className={classes.root}>
                <Paper className={classes.carouselPaper}>
                    <PhotoCarousel />
                </Paper>
                <Paper className={classes.typoPaper}>
                    <Typography className={classes.typo} variant='h2'>Punk</Typography>
                    <Typography className={classes.typo} variant='h1'>Rock</Typography>
                    <Typography className={classes.typo} variant='h2'>Kraków</Typography>
                </Paper>
            </Container>
        </div>
    )

}



