import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

import NewsPagination from "../Components/Pagination/NewsPagination.jsx";
import PostsList from "../Components/Card/PostsList.jsx"

import teamStyle from "./teamStyle.jsx";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Latest news</h2>
        <div>
          <PostsList /> 
          <NewsPagination />
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);