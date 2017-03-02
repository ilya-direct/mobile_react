import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {changeBreadcrumb} from './Actions'
import LoginForm from './LoginForm'


class Login extends React.Component {

    componentWillMount() {
        this.props.dispatch(changeBreadcrumb('login'));
    }

    render() {
        return (
            <div className="site-login">
                <h1>Авторизация</h1>

                <p>Заполните поля, чтобы войти</p>

                <div className="row">
                    <div className="col-lg-5">
                        <LoginForm {...this.props}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect()(Login);
