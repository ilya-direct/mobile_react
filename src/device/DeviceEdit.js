import  React, {Component} from 'react';
import  DeviceForm from './DeviceForm';
import Http from '../helpers/Http';
import {connect} from 'react-redux';

class DeviceEdit extends Component {

    initialValues;

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }


    componentWillMount() {

        Http.get({
            url: '/devices/' + this.props.params.id, success: (data) => {
                this.initialValues = data;
                this.props.changeBreadcrumb('deviceEdit', {'name' : data.name, 'id': data.id});
                this.setState({loaded: true});
            }
        })
    }


    render() {
        return this.state.loaded ? (
            <div className="device-update">
                <h1>Редактирование устройства: {this.initialValues.name}</h1>

                <div className="device-form">
                    <DeviceForm action="update" onSubmit={this.onSubmit.bind(this)} initialValues={this.initialValues}/>
                </div>
            </div>
        ) : (
            <div>Loading... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>
        )
    }

    onSubmit(e) {
        console.log(e);
    }
}

export default connect(null,
    (dispatch) => {
        return {
            changeBreadcrumb: (name, properties) => {
                dispatch({
                    'type' : 'CHANGE_BREADCRUMB',
                    'payload': {
                        'name' : name,
                        properties,
                    },
                });
            },
        }
    })(DeviceEdit)