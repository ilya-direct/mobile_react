import React from "react";
import {Link} from 'react-router';
import Http from './helpers/Http';
import MyDispatcher from './MyDispatcher';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            guest: Http.isGuest(),
            user: Http.getCurrentUser(),
        };
    }

    componentWillMount() {
        MyDispatcher.register(this.updateState.bind(this));
    }

    updateState(object) {
        switch (object.type) {
            case 'LOGIN':
                this.setState({
                    guest: Http.isGuest(),
                    user: Http.getCurrentUser(),
                });
                break;
            //no default
        }
    }

    logout(e) {
        console.log('logout');
        Http.logout();
        this.setState({
            guest: true,
            user: null,
        });

        console.log(this.props.router);

        this.props.router.push('/login');


        // dfdsf



    }


    render() {
        return (
            <div className="wrap">
                <nav id="w1" className="navbar-inverse navbar-fixed-top navbar" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#w1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span></button>
                            <a className="navbar-brand" href="/">Мобильная лаборатория</a></div>
                        <div id="w1-collapse" className="collapse navbar-collapse">
                            <ul id="w2" className="navbar-nav navbar-right nav">
                                {this.state.guest ?
                                    (<li><Link to='/login' activeClassName='active'>Войти</Link></li>)
                                    :
                                    (<li><a className="active" onClick={this.logout}>{this.state.user.first_name}
                                        Выйти</a></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export
default
Header;