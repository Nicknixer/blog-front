import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import FlatButton from 'material-ui/FlatButton';

class Routes extends Component {
  render() {
    return (
    <main>
        <MuiThemeProvider>

	      <div className="App">
	        <header className="App-header">
	          <h1 className="App-title">Welcome to React</h1>
	        </header>
	        <Switch>
		  		<Route exact path='/' component={App} />
		  		<Route path='/about' component={About} />
		  		<Route path='*' component={NotFound} />
			</Switch>
			<FlatButton label="Default" />
	      </div>
        </MuiThemeProvider>
    </main>
    );
  }
}


export default Routes;