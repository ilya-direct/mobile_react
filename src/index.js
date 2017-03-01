import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import Store from  './Store';
import routes from './Routes'

ReactDOM.render(
    <Provider store={Store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
