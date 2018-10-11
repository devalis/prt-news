import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import GridContainer from "../Components/Grid/GridContainer.jsx";
import GridItem from "../Components/Grid/GridItem.jsx";
import HeaderLinks from "../Components/Header/HeaderLinks.jsx";
import Parallax from "../Components/Parallax/Parallax.jsx";
//import { favicon } from "./";

import landingPageStyle from "./landingPageStyle.jsx";

// Sections for this page
import PostsList from "../Components/Card/PostsList.jsx";


const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
        //style={{color:"#61C4DC"}}
          //style={{fontSize:"10px"}}
          color="transparent"
          routes={dashboardRoutes}
          //icon={favicon}
          //image={require("assets/img/small-logoprt.png")}
          brand="Papachristos Running Team"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax filter image={require("../img/track.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>News & media</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <PostsList />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
