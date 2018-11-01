import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import PostCard from "../Card/PostCard.jsx";
import postCardStyle from "../Card/postCardStyle.jsx";

// @material-ui/icons
import buttonStyle from "../CustomButtons/buttonStyle.jsx";
import {posts} from "../../posts.jsx";

class LoadMore extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      posts: [],
      visible: 2,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 4};
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
    return (
      <section className="feed">
        <h1>Simple Load More/Pagination with React</h1>
        <h2>With Array.prototype.slice() and the power of component state!</h2>

        <div className="tiles" aria-live="polite">
          {this.state.posts.slice(0, this.state.visible).map((post, i) => {
              return (
                <div key={post.id}>
                  <PostCard 
                  date={posts[i].date} 
                  fbimg={posts[i].fbimg} 
                  description={posts[i].description} 
                  fbpost={posts[i].fbpost}
                  />
                </div>
              );
            })}
          </div>
          {this.state.visible < this.state.posts.length &&
             <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          }
        </section>
    );
  }
}
export default withStyles(buttonStyle)(LoadMore);