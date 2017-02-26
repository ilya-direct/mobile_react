import  React, {Component} from 'react';
import  DeviceForm from './DeviceForm';
import Http from '../helpers/Http';
import {connect} from 'react-redux';
import {change} from 'redux-form';

class DeviceEdit extends Component {

    initialValues;
    //dfsfdsfsdfsdfdsfsf

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
        change('DeviceForm', 'image', files[0]);
    }

    componentWillMount() {

        Http.get({
            url: '/devices/' + this.props.params.id, success: (data) => {
                this.initialValues = {
                    'name': data.name,
                    'description': data.description,
                    'alias': data.alias,
                    'image': '',
                };

                this.props.changeBreadcrumb('deviceEdit', {'name': data.name, 'id': data.id});
                this.setState({loaded: true});
            }
        })
    }


    render() {
        return this.state.loaded ? (
            <div className="device-update">
                <h1>Редактирование устройства: {this.initialValues.name}</h1>

                <div className="device-form">
                    <DeviceForm
                        action="update"
                        onDrop={this.onDrop.bind(this)}
                        onSubmit={this.onSubmit.bind(this)}
                        initialValues={this.initialValues}
                        image={this.state.file ? this.state.file : null}
                    />
                </div>
            </div>
        ) : (
            <div>Loading... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>
        )
    }

    onSubmit(e) {
        console.log('FORMDATA', e);
        console.log(this.state.file);

        let formData = new FormData();
        formData.append('image', this.state.file);
        this.state.file && Http.post({
            headers: {
                'Content-Type': undefined,
            },
            url: '/devices/image-upload',
            data: formData,
            processData: false,
            contentType: false,
            success: (data) => {
                console.log(data);
            }
        })


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