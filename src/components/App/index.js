import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';
import './style.css';
import PostList from '../PostList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthentificate: true,
      posts: [],
    };
  }
  

  componentDidMount() {

    var self = this;

    axios.get('/api/posts')
    .then(function (response) {
      self.setState({
        posts: response.posts,
      });
    });

  }
  render() {
    return (
        <PostList posts={this.state.posts} />
    );
  }
}

export default App;
