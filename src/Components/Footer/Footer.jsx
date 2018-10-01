/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "./footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.inlineBlock}
                href="https://devalis.github.io/"
                className={classes.block}
                target="_blank"
                style={{fontSize:"15px"}}
              >
                Papachristos Running Team
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.inlineBlock}
                href="https://www.ethicsport.gr/gr"
                className={classes.block}
                target="_blank"
                style={{fontSize:"15px"}}
              >
                Ethic Sport
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          Copyright &copy; 2018 by {" "}
          <a
            href="https://alisdev311646862.wordpress.com"
            className={aClasses}
            target="_blank"
          >
            alisdev
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
