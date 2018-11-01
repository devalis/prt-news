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
//import LoadMore from "../Components/LoadMore/LoadMore.jsx";

import appStyle from "./appStyle.jsx";

// Sections for this page
import PostsList from "../Components/Card/PostsList.jsx";

class App extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
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
export default withStyles(appStyle)(App);
