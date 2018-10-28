/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Menu } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "./headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          hoverColor="info"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Menu}
          dropdownList={[
            <a
              href="https://paprunningteam.gr/"
              //target="_blank"
              className={classes.dropdownLink}
              >
              Home
            </a>,
            <a
              href="https://paprunningteam.gr/#service"
              //target="_blank"
              className={classes.dropdownLink}
            >
              Services
            </a>,
            <a
              href="https://paprunningteam.gr/#coaches"
              //target="_blank"
              className={classes.dropdownLink}
            >
              Coaches
            </a>,
            <a
              href="https://paprunningteam.gr/#athletes"
              //target="_blank"
              className={classes.dropdownLink}
            >
              Team
            </a>,
            <a
              href="https://paprunningteam.gr/#contact"
              //target="_blank"
              className={classes.dropdownLink}
            >
              Contact
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/PrtPapachristosRunningTeam"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/papachristos.christos/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
