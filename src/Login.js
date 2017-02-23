import React from 'react';
import './App.css';
import $ from 'jquery';
import Http from './helpers/Http';
import MyDispatcher from './MyDispatcher';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'username': 'ilya',
            'password': '',
            serverValidation: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.props.rand); dfasdfasdfsadf df
    }


    componentWillMount() {
        this.props.setBreadcrumb('login');
        MyDispatcher.dispatch({
            type: 'CHANGE_BREADCRUMB',
            name: 'login',
        });

        // dfd df/ d
    }

    handleSubmit(e) {

        e.preventDefault();

        // $.post('http://api.mobile.dev/v1/tokens', {username: username, password : password})
        $.post('http://api.mobile.dev/v1/tokens', $(e.target).serialize())
            .fail((error) => {
                console.log(error);
                this.setState({serverValidation: false});

            })
            .done((data) => {
                console.log(data);
                Http.login(data.value, data.user);
                MyDispatcher.dispatch({
                    type: 'LOGIN',
                });
                console.log(this.props.router);
                this.props.router.push('/');
            });

    }

    handleChange(e) {

        console.log(e.target.value);
        let name = e.target.name;
        this.setState({[name]: e.target.value, serverValidation: true});
    }

    render() {
        return (
            <div className="site-login">
                <h1>Авторизация</h1>

                <p>Заполните поля, чтобы войти</p>

                <div className="row">
                    <div className="col-lg-5">
                        <form id="login-form" onSubmit={this.handleSubmit}>
                            <div className="form-group field-loginform-username required">
                                <label className="control-label" htmlFor="loginform-username">Логин</label>
                                <input type="text"
                                       value={this.state.username}
                                       className="form-control"
                                       name="username" autoFocus
                                       onChange={this.handleChange}
                                />
                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group field-loginform-password required">
                                <label className="control-label" htmlFor="loginform-password">Пароль</label>
                                <input type="password"
                                       value={this.state.password}
                                       id="loginform-password"
                                       className="form-control"
                                       onChange={this.handleChange}
                                       name="password"/>
                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group">
                                <button
                                    disabled={!this.state.serverValidation}
                                    type="submit"
                                    className="btn btn-primary"
                                    name="login-button">
                                    Войти
                                </button>
                            </div>
                            <p style={{"display": (this.state.serverValidation ? 'none' : 'inline')}}
                               className="help-block help-block-error">Неверные данные</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;
