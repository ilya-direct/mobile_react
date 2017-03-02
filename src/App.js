import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import './bootstrap/Bootstrap.css';
import Breadcrumb from './Breadcrumb';

class App extends Component {

    render() {
        return (
            <div style={{"height": "100%"}}>
                <div className="wrap">
                        <Header  router={this.props.router} />
                        <div className="container">
                            <Breadcrumb router={this.props.router}/>
                            {this.props.children}
                        </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
