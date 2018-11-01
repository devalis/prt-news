import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import GridContainer from "../Grid/GridContainer.jsx";
import PostCard from "./PostCard.jsx";
import Button from "../CustomButtons/Button.jsx";
//import LoadMore from "../LoadMore/LoadMore.jsx";


import postCardStyle from "./postCardStyle.jsx";

import {posts} from "../../posts.jsx";

class PostsList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Latest news</h2>
        <div>
          <GridContainer>
            {
              posts.reverse().map((post, i) => {
                return (
                  <PostCard 
                    key={i} 
                    id={posts[i].id} 
                    date={posts[i].date} 
                    fbimg={posts[i].fbimg} 
                    description={posts[i].description} 
                    fbpost={posts[i].fbpost}
                  />
                );
              })
            } 
          </GridContainer> 
        </div>
      </div>
    );
  }
}

export default withStyles(postCardStyle)(PostsList);