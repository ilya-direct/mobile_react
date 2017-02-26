import React, {Component} from "react";
import {Link} from 'react-router';
import {connect} from 'react-redux';





class Breadcrumb extends Component {

    items = {
        home: {url: '/', value: 'Главная', key: 1},
        login: {url: '/login', value: 'Авторизация', key: 2},
        devices: {url: '/devices', value: 'Устройства', key: 3},
        deviceView: {key: 4},
        deviceEdit: {key: 5, value: 'Редактирование', 'url': '/devices/view/'},
    };

    render() {
        return (
            <ul className="breadcrumb">
                { this.templates(this.props.name, this.props.properties) }
            </ul>
        )
    }

    renderLi(obj, active = false) {
        if (active) {
            return (<li key={obj.key} className="active">{obj.value}</li>);
        }
        return (<li key={obj.key}><Link to={obj.url} activeClassName={'active'}>{obj.value}</Link></li>);
    }

    templates(name, props) {
        if (!this.items[name]) {
            return;
        }
        let ret = [];
        switch (name) {
            case 'home':
                ret.push(this.renderLi(this.items['home'], true));
                break;
            case 'deviceView':
                ret.push(this.renderLi(this.items['home']));
                ret.push(this.renderLi(this.items['devices']));
                ret.push(<li key={this.items[name].key}>{props.name}</li>);
                break;
            case 'deviceEdit':
                ret.push(this.renderLi(this.items['home']));
                ret.push(this.renderLi(this.items['devices']));
                ret.push(this.renderLi({
                        value: props.name,
                        url: '/devices/view/' + props.id,
                        key: 6,
                    })
                );
                ret.push(<li key={this.items[name].key}>Редактирование</li>);
                break;
            default:
                ret.push(this.renderLi(this.items['home']));
                ret.push(this.renderLi(this.items[name], true));
        }

        return ret;
    }
}

export default connect((store) => {
    return {
        name: store.breadcrumb.name,
        properties: store.breadcrumb.properties,
    }
})(Breadcrumb);