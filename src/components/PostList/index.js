import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';


class PostList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    if (!this.props.posts) {
      return (
        <p>Loading...</p>
      );
    }

    let posts = this.props.posts.map((post, index) =>
      <ListItem
        key={index}
        primaryText={post.title}
        secondaryText={
          <p>
            <span>Created: {post.createdAt}</span>
            <br/>
            Author: {post.author}
          </p>
        }
      />
    );
    
    return (
      <List>
        <Subheader>Recent posts</Subheader>
        {posts}
      </List>
    );
  }
}

export default PostList;
