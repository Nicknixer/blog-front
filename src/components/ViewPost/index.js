import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import FlatButton from 'material-ui/FlatButton';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    let post = {
      "title": "",
      "body": ""
    }

    this.state = {
      "post":post
    }
  }

  componentDidMount() {
    axios
    .get('/api/posts/' + this.props.match.params.id)
    .then(response =>{
      this.setState({
        post: response.data.post,
      });
    });
  }
  
  render() {
    return (
      <div>
      <h2>{this.state.post.title}</h2>
      <p>
        {this.state.post.body}
      </p>
      </div>
    );
  }
}

export default ViewPost;
