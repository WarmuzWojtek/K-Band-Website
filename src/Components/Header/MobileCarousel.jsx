import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => {
  return {
    carousel: {
      width: '100%',
    },
  }
});

export default function MobileCarousel() {
  const classes = useStyles();

  return (

    <Carousel autoPlay interval={5000} showThumbs={false} showIndicators={true} showStatus={false} infiniteLoop className={classes.carousel}>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/v1.jpg'} alt='' />

      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/v2.jpg'} alt='' />

      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/v3.jpg'} alt='' />

      </div>
    </Carousel>
  );
};