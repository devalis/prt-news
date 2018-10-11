import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
//import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import GridItem from "../Grid/GridItem.jsx";
import Button from "../CustomButtons/Button.jsx";
import Card from "./Card.jsx";
import CardBody from "./CardBody.jsx";
import CardFooter from "./CardFooter.jsx";

// core components
import postCardStyle from "./postCardStyle.jsx";

class PostCard extends React.Component {
  render() {
    const { classes, date, description, fbimg, fbpost } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
   return (
      <GridItem xs={12} sm={12} md={4}>
        <Card carousel>
	        <GridItem className={classes.imgCardTop}>
	          <img alt='posts' src={fbimg} className={imageClasses} />
	        </GridItem>
            <h3 className={classes.cardTitle}>{date}</h3>
            <CardBody>
              <h4 className={classes.description}>{description}</h4>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button
                justIcon
                color="transparent"
                target="_blank"
                className={classes.margin5}
                href={fbpost}
              >
             	<i className={classes.socials + " fab fa-facebook"} />
              </Button>
            </CardFooter>
        </Card>
      </GridItem>
    );
  }
}
export default withStyles(postCardStyle)(PostCard);