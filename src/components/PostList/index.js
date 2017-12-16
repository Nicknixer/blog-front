import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';

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
                onClick={() => window.location = /post/ + post._id}
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
            <div>
                <List>
                    <Subheader>Recent posts</Subheader>
                    {posts}
                </List>
                <RaisedButton label="Add new post" primary={true} onClick={()=>window.location = '/post/new'}/>
            </div>
        );
    }
}

export default PostList;
