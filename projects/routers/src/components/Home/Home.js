import React, {useEffect, Component} from 'react';
import Rainbow from "../Rainbow";
import {NavLink} from "react-router-dom";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [],
    isLoading: true
  }

  componentDidMount() {
    console.log('Mounted');
    axios.get('https://jsonplaceholder.typicode.com/posts', ).then(response => {
      console.log(response.data);
      this.setState({
        posts: response.data,
        isLoading: false
      });
    });
  };

  render() {
    const posts_list = this.state.posts.map(post => {
      return (
        <NavLink to={"/"+post.id} className="collection-item avatar" key={post.id}>
          <img src="images/clipboards.png" alt="" className="circle" />
          <span className="title">{post.title}</span>
          <p>UserID: {post.userId} <br />
            Body: {post.body}
          </p>
        </NavLink>
      );
    });

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <ul className="collection">
          {this.state.isLoading ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : posts_list}
        </ul>
      </div>
    );
  }
}

export default Rainbow(Home);
