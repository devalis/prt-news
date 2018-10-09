import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../CustomButtons/Button.jsx";
import Card from "./Card.jsx";
import CardBody from "./CardBody.jsx";
import CardFooter from "./CardFooter.jsx";
import PostCard from "./PostCard.jsx";

import posts from "../../posts.jsx";

// core components
import cardStyle from "./cardStyle.jsx";

class PostsList extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <PostCard />
              <PostCard />
              <PostCard />
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}


export default withStyles(cardStyle)(PostsList);