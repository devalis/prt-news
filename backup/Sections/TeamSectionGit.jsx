import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../Components/Grid/GridContainer.jsx";
import GridItem from "../Components/Grid/GridItem.jsx";
import Button from "../Components/CustomButtons/Button.jsx";
import Card from "../Components/Card/Card.jsx";
import CardBody from "../Components/Card/CardBody.jsx";
import CardFooter from "../Components/Card/CardFooter.jsx";
import NewsPagination from "../Components/Pagination/NewsPagination.jsx";

import teamStyle from "./teamStyle.jsx";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Latest news</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card carousel>
                <GridItem className={classes.imgCardTop}>
                  <img src={require("../img/prt180812.jpg")} className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>
                  12 August 2018
                </h3>
                <CardBody>
                  <h4 className={classes.description}>
                   Πολλά συγχαρητήρια στον αθλητή μας <a href="https://devalis.github.io/#team">Κώστα Γκελαούζο</a> που 
                   έκανε πολύ καλή εμφάνιση στον μαραθώνιο του ευρωπαϊκού πρωταθλήματος 
                   όπου τερμάτισε στην 44η θέση με επίδοση κοντά στο ατομικό του ρεκορ 2.22.24! 
                   Μια χρονιά που ο αθλητής μας ήταν μέσα σε όλους τους στόχους του 
                   με αξιοπρεπείς παρουσίες και μεγάλες νίκες έφτασε στο τέλος της. 
                   Καλή συνέχεια στις προσπάθειες του!!
                  </h4>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    target="_blank"
                    className={classes.margin5}
                    href="https://www.facebook.com/PrtPapachristosRunningTeam/photos/a.629901807055590/1945044008874690/?type=3&theater"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card carousel>
                <GridItem className={classes.imgCardTop}>
                  <img src={require("../img/prt180720.jpg")} className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>
                  20 July 2018
                </h3>
                <CardBody>
                  <h4 className={classes.description}>
                   Χρυσό μετάλλιο για την <a href="https://devalis.github.io/#team">Κωνσταντίνα Γιαννοπούλου</a> στα 
                   800μ με 2'04"65 (καλύτερη φετινή επίδοση) στους Βαλκανικούς 
                   αγώνες Α/Γ πριν λίγο στη Στάρα Ζαγόρα! Συγχαρητήρια!!!
                  </h4>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    target="_blank"
                    className={classes.margin5}
                    href="https://www.facebook.com/PrtPapachristosRunningTeam/photos/a.629901807055590/1882014168511008/?type=3&theater"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card carousel>
                <GridItem className={classes.imgCardTop}>
                  <img src={require("../img/prt180716.jpg")} className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>
                  16 July 2018
                </h3>
                <CardBody>
                  <h4 className={classes.description}>
                   Πανελλήνιο Πρωτάθλημα Α/Γ: 
                   2 χρυσά και 2 χάλκινα μετάλλια για τους αθλητές του <a href="https://devalis.github.io">PRT</a> στο 
                   πανελλήνιο πρωτάθλημα που διεξήχθη για 3η συνεχή χρονιά στο Πελοποννησιακό Στάδιο (Πάτρα).</h4>
                  <h4 className={classes.description}>
                   1η θέση για την Κωνσταντία Γιαννόπουλου στα 800μ (για 3η χρονιά 2016-2017-2018) με επίδοση 2:07.58
                   1η θέση για τον Νικόλα Φράγκου στα 3000μΦ.Ε με επίδοση 9:05.89
                   3η θέση για την Αθήνα Κοϊνη στα 1500μ με επίδοση 4:23.89
                   3η θέση για τον Χρήστο Κοτίτσα στα 800μ με επίδοση 1:51.29
                   Συγχαρητήρια σε όλους τους αθλητές και τις αθλήτριες για την προσπάθεια τους.
                  </h4>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    target="_blank"
                    className={classes.margin5}
                    href="https://www.facebook.com/PrtPapachristosRunningTeam/photos/pcb.1875299682515790/1875299499182475/?type=3&theater"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
             <GridItem xs={12} sm={12} md={4}>
              <Card carousel>
                <GridItem className={classes.imgCardTop}>
                  <img src={require("../img/prt180627.jpg")} className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>
                  27 June 2018
                </h3>
                <CardBody>
                  <h4 className={classes.description}>
                   Συγχαρητήρια στην αθλήτρια του γκρουπ <a href="https://devalis.github.io/#team">Κωνσταντίνα Γιαννοπούλου</a> που 
                   τερμάτισε 3η στην πρώτη προκριματική σειρά και πήρε την πρόκριση στον τελικό των 800μ με επίδοση 2.04:99 
                   στους 18ους Μεσογειακους Αγώνες της Ταραγόνας. #Tarragona2018 #MediterraneanGames #800m
                  </h4>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    target="_blank"
                    className={classes.margin5}
                    href="https://www.facebook.com/PrtPapachristosRunningTeam/photos/a.629901807055590/1847543028624789/?type=3&theater"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card carousel>
                <GridItem className={classes.imgCardTop}>
                  <img src={require("../img/prt180626.jpg")} className={imageClasses} />
                </GridItem>
                <h3 className={classes.cardTitle}>
                  26 June 2018
                </h3>
                <CardBody>
                  <h4 className={classes.description}>
                   Το καθημερινό πρόγραμμα ενός αθλητή αποτελείται απο πολλές ώρες εξαντλητικής προπόνησης. Σύμμαχος
                    μας για καλύτερη αντοχή το Redoferro Max, το συμπλήρωμα σιδήρου που αντιμετωπίζει δραστικά τα 
                    συμπτώματα κούρασης και κόπωσης ενισχύοντας την παραγωγή ενέργειας τοπικά στους μύες κατά την άσκηση. 
                    Η Βιταμίνη C που περιέχει βοηθά στην αποτελεσματικότερη απορρόφηση του. Redoferro max και … σιδερένιος!!!
                    Ευχαριστούμε την 
                    εταιρεία <a href="https://www.facebook.com/Heremco/?__tn__=%2CdK*F-R&eid=ARBugMh_20K_pgrEMCbn9PGXTjkq79c3vDeZuCcjOxxxBO8MQvd0v86RAj6nEBI422qQjiSut89WqeC5"> Heremco Pharmaceuticals Ltd </a> για
                     την βοήθεια που παρέχει στον αθλητη μας (Παλαιστίνιο πρόσφυγα, αθλητή 400μ-800μ) 
                     Mohammed A Alrahban #redoferrο #ironsupplement #health #heremco
                  </h4>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    target="_blank"
                    className={classes.margin5}
                    href="https://www.facebook.com/PrtPapachristosRunningTeam/photos/a.629901807055590/1845549682157457/?type=3&theater"
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer> 
          <NewsPagination />
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);