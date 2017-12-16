import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import ViewPost from './components/ViewPost';
import NotFound from './components/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                            <Route exact path='/' component={App}/>
                            <Route path='/about' component={About}/>
                            <Route path='/post/new' component={AddPost}/>
                            <Route path='/post/:id/edit' component={EditPost}/>
                            <Route path='/post/:id' component={ViewPost}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </main>
        );
    }
}


export default Routes;