import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import WhatsAppFloatingButton from "components/WhatsAppFloatingBtn/index.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import BoxingCoach from "./Sections/BoxingCoach.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import WorkSection from "./Sections/WorkSection.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Empangeni Boxing Club"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/ring-fight-2.JPG")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3 className={classes.title}>
                {" "}
                No one delivers like Empangeni Boxing Gym delivers, Team
                Skeleton, Team no Fear{" "}
              </h3>
              <h4>
                We have produced a of number Local, District, Provincial and
                National Boxing Champions.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://youtu.be/OfmWCw6Yn9Y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <BoxingCoach />
          <SectionCarousel />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}
