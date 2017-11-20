import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';


class Routes extends Component {
  render() {
    return (
    <main>
    <Switch>
  		<Route exact path='/' component={App} />
  		<Route path='/about' component={About} />
  		<Route path='*' component={NotFound} />
	</Switch>
  </main>
    );
  }
}


export default Routes;