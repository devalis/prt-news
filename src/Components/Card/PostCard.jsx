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

// core components
import cardStyle from "./cardStyle.jsx";

const PostCard = () => {
  
   return (
      <div>
        <Card carousel>
	        <GridItem >
	          <img alt='posts' src={require("../../img/prt180812.jpg")}  />
	        </GridItem>
            <h3 >
              12 August 2018
            </h3>
            <CardBody>
              <h4 >
               Πολλά συγχαρητήρια στον αθλητή μας <a href="https://devalis.github.io/#team">Κώστα Γκελαούζο</a> που 
               έκανε πολύ καλή εμφάνιση στον μαραθώνιο του ευρωπαϊκού πρωταθλήματος 
               όπου τερμάτισε στην 44η θέση με επίδοση κοντά στο ατομικό του ρεκορ 2.22.24! 
               Μια χρονιά που ο αθλητής μας ήταν μέσα σε όλους τους στόχους του 
               με αξιοπρεπείς παρουσίες και μεγάλες νίκες έφτασε στο τέλος της. 
               Καλή συνέχεια στις προσπάθειες του!!
              </h4>
            </CardBody>
            <CardFooter >
              <Button
                justIcon
                color="transparent"
                target="_blank"
                
                href="https://www.facebook.com/PrtPapachristosRunningTeam/photos/a.629901807055590/1945044008874690/?type=3&theater"
              >
             
              </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

export default withStyles(cardStyle)(PostCard);