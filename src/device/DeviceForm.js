import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Dropzone  from 'react-dropzone'
import classNames from 'classnames'

const required = value => value ? undefined : 'Required'
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

const renderField = ({input, label, type, meta: {touched, error, pristine}}) => {
    let inputItem = '';
    let isError = (!pristine || touched) && error;
    let divClass = classNames({
        'form-group': true,
        'has-error': isError,
        'has-success': (!pristine || touched)&& !error
    });
    input.className = "form-control"
    switch (type) {
        case 'file':
            inputItem = <input type="file" className="form-control" {...input} />
            break;
        case 'text':
            inputItem = <input className="form-control" {...input} />
            break;
        case 'textarea':
            inputItem = <textarea {...input}> </textarea>
            break;
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

const FieldLevelValidationForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, submitFunc} = props
    return (
        <form onSubmit={handleSubmit(submitFunc)}>
            <Field name="name" type="text" label="Название"
                   component={renderField}
            />
            <Field name="alias" type="text" label="Alias (необязательно)"
                   component={renderField}
                   validate={[required]}
                   warn={aol}
            />
            <Field name="description" type="textarea"
                   component={renderField} label="Описание"
                   validate={[required]}
                   warn={tooOld}
            />
            <Dropzone onDrop={props.onDrop} style={DropZoneStyle}>
                <div>Нажмите или перетащите картинку в выделенную область</div>
            </Dropzone>
            {props.image ? (<img src={props.image.preview} role="presentation" style={{maxWidth: '300px', maxHeight: '500px'}}/>) : ''}
            <div className="form-group">
                <button type="submit" className="btn btn-primary" disabled={submitting}>Сохранить</button>
                <span style={{padding:'0 10px'}}></span>
                <button type="button" className="btn btn-info" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'DeviceForm' // a unique identifier for this form
})(FieldLevelValidationForm)