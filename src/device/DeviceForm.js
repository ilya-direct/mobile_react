import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Dropzone  from 'react-dropzone'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>

    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
    console.log(input);
    let inputItem = '';
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
        <div className="form-group">
            <label className="control-label" htmlFor={'device-' + input.name}>{label}</label>
            {inputItem}
            <div className="help-block"></div>
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
    const {handleSubmit, pristine, reset, submitting} = props
    // console.log('action: -> ', props.action);
    // console.log('submit: -> ', handleSubmit);
    // this.change('DeviceForm', 'name', 'Diana');
    /*if (props.image) {
        props.change('image', props.image.preview);
    }*/
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" type="text" label="Название"
                   component={renderField}
                   validate={[required, maxLength15]}
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
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {props.image ? (<img src={props.image.preview} style={{maxWidth: '300px', maxHeight: '500px'}}/>) : ''}
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