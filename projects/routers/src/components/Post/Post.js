import React, {Component} from 'react';
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    console.log('Post component did mount');
    let id = this.props.match.params.post_id;
    console.log(id);

    axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(resp => {
      console.log(resp.data);
      this.setState({
        post: resp.data
      }, _ => console.log(this.state));
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="center">Post</h2>
        {this.state.post ? (
          <div>
            <h3>{this.state.post.title}</h3>
            <p>UserId: {this.state.post.userId} <br/>
            Body: {this.state.post.body}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Post;
