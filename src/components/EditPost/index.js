import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';

class EditPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            author: "",
            originalTitle: ""
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.authorChanged = this.authorChanged.bind(this);
        this.bodyChanged = this.bodyChanged.bind(this);
        this.editPost = this.editPost.bind(this);
    };


    componentDidMount() {
        axios
            .get('/api/posts/' + this.props.match.params.id)
            .then(response => {
                let post = response.data.post;
                this.setState({
                    title: post.title,
                    author: post.author,
                    body: post.body,
                    originalTitle: post.title
                });
            });
    }

    titleChanged(e) {
        this.setState({
            title: e.target.value
        });
    };

    bodyChanged(e) {
        this.setState({
            body: e.target.value
        });
    };

    authorChanged(e) {
        this.setState({
            author: e.target.value
        });
    };

    editPost() {
        axios.put(
            '/api/posts/' + this.props.match.params.id,
            {
                title: this.state.title,
                body: this.state.body,
                author: this.state.author
            })
            .then(response => {
                alert('Post has been saved!');
                window.location = '/';
            });
    }

    render() {
        return (
            <div>
                <h2>Edit post "{this.state.originalTitle}"</h2>
                <TextField
                    hintText="Title"
                    onChange={this.titleChanged}
                    value={this.state.title}
                />
                <br/>
                <TextField
                    hintText="Author's name"
                    onChange={this.authorChanged}
                    value={this.state.author}
                />
                <br/>
                <TextField
                    hintText="Body"
                    value={this.state.body}
                    onChange={this.bodyChanged}
                    multiLine={true}
                />
                <br/>
                <RaisedButton label="Home" secondary={true} onClick={() => window.location = '/'}/>
                <RaisedButton label="Save" primary={true} onClick={this.editPost}/>
            </div>
        );
    }
}

export default EditPost;
