import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Sites
import App from './App';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="*" exact render={() => (
                <h1>Error 404 - Not Found</h1>
            )} />
        </Switch>
    </Router>
), document.getElementById('root'));

serviceWorker.unregister();
