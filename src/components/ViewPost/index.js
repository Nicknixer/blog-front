import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';

class ViewPost extends Component {
    constructor(props) {
        super(props);
        let post = {
            "title": "",
            "body": ""
        };

        this.state = {
            "post": post,
            "open": false
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDelete = () => {
        axios
            .delete('/api/posts/' + this.state.post._id)
            .then(() => {
                window.location = '/';
            });
        this.handleClose();
    };

    componentDidMount() {
        axios
            .get('/api/posts/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    post: response.data.post,
                });
            });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Yes"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleDelete}
            />,
        ];

        return (
            <div>
                <h2>{this.state.post.title}</h2>
                <p>
                    {this.state.post.body}
                </p>
                <RaisedButton label="Home" secondary={true} onClick={() => window.location = '/'}/>
                <RaisedButton label="Edit" primary={true} />
                <RaisedButton label="Delete" secondary={true} onClick={this.handleOpen} />
                <Dialog
                    title="Delete post"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Are you really want to delete this post?
                </Dialog>
            </div>
        );
    }
}

export default ViewPost;
