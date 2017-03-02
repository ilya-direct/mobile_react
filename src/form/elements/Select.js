import React, {Component} from 'react';
import classNames from 'classnames'

class Select extends Component {

    render() {
        const {input, label, options, meta: {touched, error, pristine}} = this.props;

        let isError = (!pristine || touched) && error;
        let divClass = classNames({
            'form-group': true,
            'has-error': isError,
            'has-success': (!pristine || touched) && !error
        });

        let inputItem;
        if (options) {
            inputItem =
                <select className="form-control" {...input}>
                    <option value="">Выберете ..</option>
                    {options.map(option => <option value={option.id} key={option.id}>{option.name}</option>)}
                </select>
        } else {
            inputItem =
                <div>Загрузка... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>
        }

        return <div className={divClass}>
            <label className="control-label" htmlFor={'device-' + input.name}>{label}</label>
            {inputItem}
            {isError ? (<div className="help-block">{error}</div>) : ''}
        </div>
    }
}

export default Select;
