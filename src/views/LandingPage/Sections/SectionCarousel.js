import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/slide0.JPG";
import image2 from "assets/img/slide1.jpg";
import image3 from "assets/img/slide3.JPG";
import image4 from "assets/img/slide2.JPG";
import image5 from "assets/img/ring-fight-2.JPG";
import image6 from "assets/img/slide6.jpg";
import image9 from "assets/img/slide9.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="Third slide" className="slick-image" />
                </div>

                <div>
                  <img src={image5} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image6} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image9} alt="Third slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
