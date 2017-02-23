import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Login from './Login';
import Device from './device/Device';
import DeviceList from './device/DeviceList';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import DeviceView from "./device/DeviceView";

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route  path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path='home' component={Home}/>
            <Route path='login' component={Login} />
            <Route path='devices' component={Device}>
                <IndexRoute component={DeviceList}/>
                <Route path='view/:id' component={DeviceView}/>
            </Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
