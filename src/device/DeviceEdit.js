import  React, {Component} from 'react';
import  DeviceForm from './DeviceForm';
import Http from '../helpers/Http';
import {connect} from 'react-redux';
import {SubmissionError} from 'redux-form';
import axios from 'axios';
import AxiosNew from '../helpers/Axios';

class DeviceEdit extends Component {

    initialValues;

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    onDrop(files) {
        console.log('Received files: ', files);
        this.setState({
            'file': files[0],
        });
    }

    componentWillMount() {
        AxiosNew.get('/devices/' + this.props.params.id)
             .then(response => {
                let data = response.data;
                this.initialValues = {
                    'name': data.name,
                    'description': data.descriptixcon,
                    'alias': data.alias,
                };

                this.props.changeBreadcrumb('deviceEdit', {'name': data.name, 'id': data.id});
                this.setState({loaded: true});
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
                <h1>Редактирование устройства: {this.initialValues.name}</h1>

                <div className="device-form">
                    <DeviceForm
                        action="update"
                        onDrop={this.onDrop.bind(this)}
                        submitFunc={this.onSubmit.bind(this)}
                        initialValues={this.initialValues}
                        image={this.state.file ? this.state.file : null}
                    />
                </div>
            </div>
        ) : (
            <div>Loading... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>
        )
    }

    onSubmit (submittedData) {

        let instance = axios.create({
            baseURL: Http.host,
            headers: {Authorization: Http.getToken()}
        });

        let promise = new Promise((resolve) => resolve({}));
        if (this.state.file) {
            let formData = new FormData();
            formData.append('image', this.state.file);
            promise = instance.post('/devices/image-upload', formData);
        }

        promise = promise.then((response) => {
            console.log('device changes', response);
            if (response && response.data) {
                submittedData.image_name = response.data.image_name
            }
            console.log('submitted response:', submittedData);
            return instance.put('/devices/' + this.props.params.id, submittedData)
        }).then((response) => {
            console.log('device changes succeeded', response.data);
            this.props.router.push('/devices/view/' + response.data.id)

        }).catch(error => {
            console.log(error.response.data);
            throw error;
        }).catch(e => {
            console.log(e.response.data);
            throw new SubmissionError(e.response.data);
        });

        return promise;
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