import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Who we are</h2>
          <h4 className={classes.description}>
            We train professional and amateur boxers, we teach boxing skill and
            functional training to normal people that want to improve fitness
            and learn BOXING skills.  In simple terms come to us unfit, commit
            and we will ensure you meet your fitness and weight goals. The
            Empangeni Boxing Gym is registered as Non Profit Organisation
            221-935.
          </h4>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Coach</h2>
          <h4 className={classes.description}>
            The founder of the Empangeni Boxing Gym is Alpheus Bheki Mngomezulu,
            formerly known as "Skeleton" a name he earned during his
            professional boxing days, born in 1965, September 11 at Empangeni
            KwaZulu Natal, boxing is his legacy he is determined to give back
            and uplift his community by nurturing champions brave to fight in
            ring and beyond ring when faced with life adversity. He is now a
            proud coach of male and female boxers. Our passionate coach has
            produced a number of Local, District, Provincial  and National
            Champions. We have more than 25 boxers (male & female).We have 2
            classes a day starting at 5am and do private sessions throughout the
            day. The second section start training at 16h00.
          </h4>
        </GridItem>
      </GridContainer>
      {/***<div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>***/}
    </div>
  );
}
