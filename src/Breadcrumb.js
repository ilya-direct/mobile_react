import React, {Component} from "react";
import {Link} from 'react-router';
import MyDispatcher from './MyDispatcher';

class Breadcrumb extends Component {

    items = {
        home: {url: '/', value: 'Главная', key: 1},
        login: {url: '/login', value: 'Авторизация', key: 2},
        devices: {url: '/devices', value: 'Устройства', key: 3},
        deviceView: {key: 4},
    };






    constructor(props) {
        super(props);


        console.log(this.props.router.location.pathname);
        this.state = {
            name: '',
            properties: null,
        }
    }

    componentWillMount() {
        MyDispatcher.register(this.changeBreadcrumb.bind(this));
    }

    changeBreadcrumb(object) {
        switch(object.type) {
            case 'CHANGE_BREADCRUMB':
                this.setState({
                    name: object.name,
                    properties: object.properties,
                });
                break;
            //no default
        }
    }

    render() {
        return (
            <ul className="breadcrumb">
                { this.templates(this.state.name, this.state.properties) }
            </ul>
        )
    }

    renderLi(obj, active = false) {
        if (active) {
            return (<li key={obj.key} className="active">{obj.value}</li>);
        }
        return (<li key={obj.key}><Link to={obj.url} activeClassName={'active'}>{obj.value}</Link></li>);
    }
    templates(name, props) {
        if (!this.items[name]) {
            return;
        }
        let ret = [];
        switch (name) {
            case 'home':
                ret.push(this.renderLi(this.items['home'], true));
                break;
            case 'deviceView':
                ret.push(this.renderLi(this.items['home']));
                ret.push(this.renderLi(this.items['devices']));
                ret.push(<li key={this.items[name].key}>{props.name}</li>);
                break;
            default:
                ret.push(this.renderLi(this.items['home']));
                ret.push(this.renderLi(this.items[name], true));
        }

        return ret;



    }
}


export default Breadcrumb;