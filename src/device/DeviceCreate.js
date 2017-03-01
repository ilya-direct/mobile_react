import React, {Component} from 'react'
import {connect} from 'react-redux';
import {changeBreadcrumb} from '../Actions'
import DeviceForm from './DeviceForm';

class DeviceCreate extends Component {

    componentWillMount() {
        this.props.changeBreadcrumb('deviceCreate')
    }

    render() {
        return <div>
            <h1>Добавление устройства</h1>
            <DeviceForm action={2} {...this.props}/>
        </div>
    }
}

export default connect(null,
    (dispatch) => {
        return {
            changeBreadcrumb: (name, properties) => {
                dispatch(changeBreadcrumb(name, properties));
            },
        }
    }
)(DeviceCreate)
