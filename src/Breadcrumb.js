import React, {Component} from "react";
import {Link} from 'react-router';
import MyDispatcher from './MyDispatcher';

class Breadcrumb extends Component {

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
                { this.templates(this.state.name) }
            </ul>
        )
    }


    templates(name) {
        let ret = [];
        ret.push(
            <li key="1"><Link to="/" activeClassName={'active'}>Главная</Link></li>
        );

        if (name === 'login') {
            ret.push(<li key="2"><Link to="login" activeClassName={'active'}>Авторизация</Link></li>);

        }


        return ret;

    }
}

export default Breadcrumb;