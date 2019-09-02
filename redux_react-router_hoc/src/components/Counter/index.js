import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';

const history = createBrowserHistory();

export default () => (
    <Router history={history}>
        <div>
            <Navigation />
            <Switch>
                 <Route path="/" exact component={Home} />
                 <Route path="/about" component={About} />
            </Switch>
        </div>
    </Router>
)