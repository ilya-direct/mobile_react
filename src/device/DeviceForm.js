import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Dropzone  from 'react-dropzone'
import classNames from 'classnames'
import axios from '../helpers/Axios';
import {SubmissionError} from 'redux-form';
import Http from '../helpers/Http';

const required = value => value ? undefined : 'Обязательное поле'

const ACTION_UPDATE = 1;
const ACTION_CREATE = 2;

const DropZoneStyle = {
    'borderWidth': '2px',
    'borderColor': 'black',
    'borderStyle': 'dashed',
    'borderRadius': '4px',
    'margin': '30px',
    'padding': '30px',
    'width': '200px',
    'transition': 'all 0.5s',
}

const renderField = ({input, label, type, options, meta: {touched, error, pristine}}) => {
    let inputItem = '';
    let isError = (!pristine || touched) && error;
    let divClass = classNames({
        'form-group': true,
        'has-error': isError,
        'has-success': (!pristine || touched) && !error
    });

    switch (type) {
        case 'text':
            inputItem = <input className="form-control" {...input} />
            break;
        case 'textarea':
            inputItem = <textarea className="form-control" {...input}></textarea>
            break;
        case 'checkbox':
            inputItem = <input type="checkbox" {...input}/>
            break;
        case 'select':
            if (options) {
                inputItem = <select className="form-control" {...input}>
                    <option value="">Выберете производителя</option>
                    {options.map(option => <option value={option.id} key={option.id}>{option.name}</option>)}
                </select>
            } else {
                inputItem = <div>Загрузка... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>
            }
        //no default
    }
    return (
        <div className={divClass}>
            <label className="control-label" htmlFor={'device-' + input.name}>{label}</label>
            {inputItem}
            {isError ? (<div className="help-block">{error}</div>) : ''}
        </div>
    )
}
class DeviceForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentWillMount() {
        let data = this.props.data;
        if (this.props.action === ACTION_UPDATE) {
            this.props.initialize({
                'name': data.name,
                'description': data.description,
                'alias': data.alias,
                'enabled': data.enabled,
                'vendor_id': data.vendor ? data.vendor.id : null,
                'device_category_id': data.deviceCategory ? data.deviceCategory.id : null,
            });
            this.setState({
                imageUrl: data.image_url
            });
        }

        axios.get('/vendors')
            .then(resolve => {
                this.setState({
                    'vendorOptions': resolve.data,
                })
            })
            .catch(Http.catchUnauthorized.bind(this))

        axios.get('/device-categories')
            .then(resolve => {
                this.setState({
                    'deviceCategoryOptions': resolve.data,
                })
            })
            .catch(Http.catchUnauthorized.bind(this))
    }

    onDrop(files) {
        // console.log('Received files: ', files);
        this.setState({
            'file': files[0],
        });
    }

    onSubmit(submittedData) {
        let promise = new Promise((resolve) => resolve({}));
        if (this.state.file) {
            let formData = new FormData();
            formData.append('image', this.state.file);
            promise = axios.post('/devices/image-upload', formData);
        }

        promise = promise
            .then((response) => {
                if (response && response.data) {
                    submittedData.image_name = response.data.image_name
                }
                console.log('submitted response:', submittedData);
                let promise;
                switch (this.props.action) {
                    case ACTION_UPDATE:
                        promise = axios.put('/devices/' + this.props.params.id, submittedData);
                        break;
                    case ACTION_CREATE:
                        promise = axios.post('/devices', submittedData);
                        break;
                    default:
                        throw new Error('Action not Defined')
                }

                return promise;
            }).then((response) => {
                console.log('device changes succeeded', response.data);
                this.props.router.push('/devices/view/' + response.data.id)

            }).catch(Http.catchUnauthorized.bind(this))
            .catch(e => {
                console.log(e);
                throw new SubmissionError(e.response.data);
            });

        return promise;
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props


        let  imageUrl = this.state.file ? this.state.file.preview : (this.state.imageUrl ? this.state.imageUrl : null);
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="name" type="text" label="Название"
                       component={renderField}
                       validate={[required]}
                />
                <Field name="alias" type="text" label="Alias (необязательно)"
                       component={renderField}
                />
                <Field name="description" type="textarea"
                       component={renderField} label="Описание"
                       validate={[required]}
                />
                <Field name="vendor_id" options={this.state.vendorOptions} type="select" component={renderField}
                       label="Производитель"/>
                <Field name="device_category_id" options={this.state.deviceCategoryOptions} type="select" component={renderField}
                       label="Категория"/>
                <Field name="enabled" type="checkbox" component={renderField} label="Активен"/>
                <div className="form-group">
                    <Dropzone onDrop={this.onDrop.bind(this)} style={DropZoneStyle}>
                        <div>Нажмите или перетащите картинку в выделенную область</div>
                    </Dropzone>
                    {imageUrl ? (<img src={imageUrl} role="presentation" style={{maxWidth: '300px', maxHeight: '500px'}}/>) : ''}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Сохранить</button>
                    <span style={{padding: '0 10px'}}></span>
                    <button type="button" className="btn btn-info" disabled={pristine || submitting} onClick={reset}>
                        Clear
                        Values
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'DeviceForm'
})(DeviceForm)