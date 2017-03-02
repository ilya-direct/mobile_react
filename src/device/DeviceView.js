import React from 'react';
import Http from '../helpers/Http';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import axios from '../helpers/Axios'

class DeviceView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }


    componentWillMount() {
        axios.get('/devices/' + this.props.params.id)
            .then(response => {
                let data = response.data;
                this.props.changeBreadcrumb('deviceView', {id: this.props.id, name: data.name});
                this.setState({
                    loaded: true,
                    device: data,
                });
            })
            .catch(Http.catchUnauthorized.bind(this))
            .catch(Http.catchNotFound.bind(this))
    }

    deleteDevice() {
        let id = this.props.params.id;
        if (confirm('Вы действительно хотите удалить устройство?')) {
            axios
                .delete('/devices/' + id)
                .then((response) => {
                    this.props.router.push('/devices');
                })
        }
    }

    render() {

        if (this.state.pageNotFound) {
            return <div> Страница не найдена</div>
        }
        // Query params
        // console.log(this.props.location.query);
        return !this.state.loaded ?
            (<p>Loading... <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></p>)
            : (
            <div className="device-view">
                <h1>{ this.state.device.name }</h1>
                <p>
                    <Link className="btn btn-primary" to={'/devices/update/' + this.props.params.id}>
                        Редактировать
                    </Link>
                    <a className="btn btn-danger" onClick={this.deleteDevice.bind(this)}>Удалить</a>
                </p>

                <table id="w0" className="table table-striped table-bordered detail-view">
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{ this.state.device.id }</td>
                    </tr>
                    <tr>
                        <th>Название</th>
                        <td>{ this.state.device.name }</td>
                    </tr>
                    <tr>
                        <th>Alias</th>
                        <td>{ this.state.device.alias }</td>
                    </tr>
                    <tr>
                        <th>Изображение</th>
                        <td><img src={this.state.device.image_url} alt={this.state.device.alias }/></td>
                    </tr>
                    <tr>
                        <th>Описание</th>
                        <td>{ this.state.device.description }</td>
                    </tr>
                    <tr>
                        <th>Название категории</th>
                        <td>{ this.state.device.deviceCategory ? this.state.device.deviceCategory.name : '-'  }</td>
                    </tr>
                    <tr>
                        <th>Активен</th>
                        <td>{ this.state.device.enabled ? 'Да' : 'Нет' }</td>
                    </tr>
                    <tr>
                        <th>Название производителя</th>
                        <td>{ this.state.device.vendor ? this.state.device.vendor.name : '-'  }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );

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
    })(DeviceView);