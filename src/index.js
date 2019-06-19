import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Sites
import App from './sites/App/App';

// Error Sites
import NotFound from './sites/Errors/NotFound/NotFound';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render((
    <ErrorBoundary>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="*" exact component={NotFound} />
            </Switch>
        </Router>
    </ErrorBoundary>
), document.getElementById('root'));

serviceWorker.unregister();
