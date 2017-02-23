import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import './bootstrap/Bootstrap.css';
import emitter from 'event-emitter';
import Breadcrumb from './Breadcrumb';


class App extends Component {
    // todo;

    rand = '22';

    constructor(props) {
        super(props);



        localStorage.setItem('todos', 'ccc');
        this.state = {
            breadcrumb : {'name' : ''},
            rand: '34234342000',
        };

        this.setBreadcrumbFunc = this.setBreadcrumbFunc.bind(this);

    }


    componentDidMount() {
        let e = emitter({});
        e.on('test', function () {
            console.log('test event');
        })
    }

    render() {
        return (
            <div style={{"height": "100%"}}>
                <div className="wrap">
                        <Header  router={this.props.router} />
                        <div className="container">
                            <Breadcrumb router={this.props.router} breadcrumb={ this.state.breadcrumb } />
                            {React.cloneElement(this.props.children, { setBreadcrumb: this.setBreadcrumbFunc  })}
                        </div>
                </div>

                <Footer />
            </div>
        );
    }

    setBreadcrumbFunc(breadcrumb) {
        this.setState({breadcrumb : { name : breadcrumb}});
    }
}

export default App;
