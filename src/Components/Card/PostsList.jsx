import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import PostCard from "./PostCard.jsx";
import Button from "../CustomButtons/Button.jsx";

import postCardStyle from "./postCardStyle.jsx";

import {posts} from "../../posts.jsx";

class PostsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      visible: 3,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      res => res.json()
    ).then(res => {
      this.setState({
        posts: res
      });
    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Latest news</h2>
        <div>
          <GridContainer>
            {
              this.state.posts.slice(0, this.state.visible).map((post, i) => {
               return (
                  <PostCard key={i}
                  //id={posts[i].id}
                  date={posts[i].date} 
                  fbimg={posts[i].fbimg} 
                  description={posts[i].description} 
                  fbpost={posts[i].fbpost}
                  />
                );
              })
            } 
          </GridContainer> 
           <GridContainer>
            <GridItem>
            {this.state.visible < this.state.posts.length &&
              <Button 
                color="info"
                onClick={this.loadMore} 
              >
              Load more
              </Button>
            }
            </GridItem>
          </GridContainer>
      </div>
    </div>
    );
  }
}

export default withStyles(postCardStyle)(PostsList);