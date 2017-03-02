import React, {Component} from 'react';
import classNames from 'classnames'

class Input extends Component {

    render() {
        const {input, label, type, meta: {touched, error, pristine}} = this.props;

        let isError = (!pristine || touched) && error;
        let divClass = classNames({
            'form-group': true,
            'has-error': isError,
            'has-success': (!pristine || touched) && !error
        });

        let inputItem = <input type={type} className="form-control" {...input} />

        return <div className={divClass}>
            <label className="control-label" htmlFor={'device-' + input.name}>{label}</label>
            {inputItem}
            {isError ? (<div className="help-block">{error}</div>) : ''}
        </div>
    }
}

export default Input;