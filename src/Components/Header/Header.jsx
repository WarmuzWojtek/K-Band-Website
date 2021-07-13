import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import Typing from './Typing'
import DesktopCarousel from './DesktopCarousel';
import MobileCarousel from './MobileCarousel';
import { useViewport } from '../../Hook/useViewport'


const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-evenly',
            minHeight: '90vh',
            marginTop: '10vh',
            zIndex: 2,
            flexWrap: 'wrap',
            padding: theme.spacing(2),
            '@media(max-width:960px)': {
                minHeight: '140vh',
            },
            '@media(max-width:660px)': {
                minHeight: '120vh'

            },
            '@media(max-width:460px)': {
                minHeight: '100vh'

            },
        },
        carouselPaper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            background: 'none',
            '@media(max-width:960px)': {
                width: '90%',
                order: 1,
            },
        },
        typoPaper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '35%',
            background: 'none',
            paddingLeft: theme.spacing(2),
            '@media(max-width:960px)': {
                width: '90%',
                minHeight: '25vh',
                paddingLeft: 0,
            },
        },
        legend: {
            fontSize: '25px',
        },
        typo: {
            fontFamily: 'Nunito',
            color: 'white',
        },
        overlay: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundImage: 'linear-gradient(transparent, black)',
            zIndex: 1,
        }
    }
});


export default function Header() {
    const classes = useStyles();
    const { width } = useViewport();

    const setSource = () => {
        if (width < 960) {
            return `url(${process.env.PUBLIC_URL + '/images/graffitiv1.jpg'})`
        } else return `url(${process.env.PUBLIC_URL + '/images/graffiti.jpg'})`
    }

    const source = setSource();

    return (
        <div id='header' style={{ backgroundImage: `${source}`, backgroundPosition: 'left,bottom', backgroundSize: 'cover' }}>
            <div className={classes.overlay}></div>
            <Container className={classes.root}>
                <Paper className={classes.carouselPaper}>
                    {width > 960 ? <DesktopCarousel /> : <MobileCarousel />}
                </Paper>
                <Paper className={classes.typoPaper}>
                    <Typing />
                </Paper>
            </Container>
        </div>
    )
}



