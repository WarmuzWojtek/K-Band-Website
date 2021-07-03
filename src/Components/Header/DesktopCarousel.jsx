import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => {
  return {
    carousel: {
      width: '100%',
    },
    legend: {
      fontSize: '25px',
      opacity: 1,
    },
  }
});

export default function DesktopCarousel() {
  const classes = useStyles();

  return (

    <Carousel autoPlay interval={5000} showThumbs={false} showIndicators={true} showStatus={false} infiniteLoop className={classes.carousel}>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/a.jpg'} alt='' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/b.jpg'} alt='' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/d.jpg'} alt='' />
      </div>
    </Carousel>


  );
};