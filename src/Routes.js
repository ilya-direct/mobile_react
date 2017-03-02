import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import Login from './Login';
import Device from './device/Device';
import DeviceList from './device/DeviceList';
import DeviceView from "./device/DeviceView";
import DeviceEdit from "./device/DeviceEdit";
import DeviceCreate from "./device/DeviceCreate";
import Http from './helpers/Http'

const auth = function (nextState, replace) {
    if (Http.isGuest()) {
        Http.setBackUrl(nextState.location.pathname);
        replace({pathname: '/login'})
    }
}

const guestOnly = function (nextState, replace) {
    if (!Http.isGuest()) {
        replace({ pathname: '/'})
    }
}

const routes =
    <Route path="/" component={App}>
        <IndexRoute component={Home}  onEnter={auth}/>
        <Route path='home' component={Home} onEnter={auth}/>
        <Route path='login' component={Login} onEnter={guestOnly}/>
        <Route path='devices' component={Device}>
            <IndexRoute component={DeviceList}  onEnter={auth}/>
            <Route path='view/:id' component={DeviceView} onEnter={auth}/>
            <Route path='update/:id' component={DeviceEdit} onEnter={auth}/>
            <Route path='create' component={DeviceCreate} onEnter={auth}/>
        </Route>
    </Route>

export default routes;
