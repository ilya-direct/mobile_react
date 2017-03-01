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

const routes =
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path='home' component={Home}/>
        <Route path='login' component={Login}/>
        <Route path='devices' component={Device}>
            <IndexRoute component={DeviceList}/>
            <Route path='view/:id' component={DeviceView}/>
            <Route path='update/:id' component={DeviceEdit}/>
            <Route path='create' component={DeviceCreate}/>
        </Route>
    </Route>

export default routes;
