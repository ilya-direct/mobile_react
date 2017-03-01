import  React, {Component} from 'react';
import  DeviceForm from './DeviceForm';
import Http from '../helpers/Http';
import {connect} from 'react-redux';
import axios from '../helpers/Axios';

class DeviceEdit extends Component {

    componentWillMount() {
        this.setState({
            loaded: false,
        })

        axios.get('/devices/' + this.props.params.id)
            .then(response => {
                let data = response.data;
                this.props.changeBreadcrumb('deviceEdit', {'name': data.name, 'id': data.id});
                this.setState({
                    loaded: true,
                    data: data,
                });
            })
            .catch(Http.catchUnauthorized.bind(this))
            .catch(Http.catchNotFound.bind(this));
    }

    render() {
        if (this.state.pageNotFound) {
            return (<div>Страница не найдена</div>)
        }

        return this.state.loaded ? (
            <div className="device-update">
                <h1>Редактирование устройства: {this.state.data.name}</h1>
                <div className="device-form">
                    <DeviceForm data={this.state.data} {...this.props} action={1} />
                </div>
            </div>
        ) : (
            <div>Loading... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>
        )
    }
}

export default connect(null,
    (dispatch) => {
        return {
            changeBreadcrumb: (name, properties) => {
                dispatch({
                    'type': 'CHANGE_BREADCRUMB',
                    'payload': {
                        'name': name,
                        properties,
                    },
                });
            },
        }
    })(DeviceEdit)