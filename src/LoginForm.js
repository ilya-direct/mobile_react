import React, {Component} from 'react'
import axios from './helpers/Axios'
import {SubmissionError, reduxForm, Field} from 'redux-form'
import {login} from './Actions'
import Http from './helpers/Http'
import {required} from './form/Validators'
import Input from './form/elements/Input'

class LoginForm extends Component {

    onSubmit(submittedData) {

        let promise = axios.post('/tokens', submittedData)
            .then(response => {
                let data = response.data;
                Http.login(data.value, data.user);
                this.props.dispatch(login(data.user));
                this.props.router.push(Http.getBackUrl());
            })
            .catch(error => {
                if (error.response) {
                    throw new SubmissionError(error.response.data);
                }
            })

        return promise;

    }

    render() {
        const {handleSubmit, submitting} = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="username" type="text" label="Логин"
                       component={Input}
                       validate={[required]}
                />
                <Field name="password" type="password" label="Пароль"
                       component={Input}
                       validate={[required]}
                />
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Сохранить</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(LoginForm)
