import React, { Component } from "react";
import Comment from "./Comment";

export default class Comments extends Component {
  state = {
    comments: [],
    isFetching: true
  };

  async fetchData(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    let data = this.fetchData(url);
    data.then(comments => {
      let commentList = comments.slice(0, 10);
      this.setState(
        {
          comments: commentList,
          isFetching: false
        },
        () => console.log("New State", this.state.comments)
      );
    });
  }

  render() {
    const { comments, isFetching } = this.state;
    return isFetching ? "Loading..." : <Comment comments={comments} />;
  }
}
