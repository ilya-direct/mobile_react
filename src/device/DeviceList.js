import React, {Component} from 'react';
import Http from '../helpers/Http';
import axios from '../helpers/Axios'
import {Link} from 'react-router';
import {connect} from 'react-redux';

class DeviceList extends Component {

    componentWillMount() {
        this.props.changeBreadcrumb();
        this.setState({loading: true});
        Http.get({
            url: '/devices',
            success: (data) => {
                // console.log(data);

                this.setState({
                    loading: false,
                    devices: data,
                });
            },
        }, this);
    }

    deleteDevice(id) {
        if (confirm('Вы действительно хотите удалить устройство?')) {
            axios
                .delete('/devices/' + id)
                .then((response) => {
                    this.setState({
                        devices: this.state.devices.filter(item => item.id !== id)
                    })
                })
        }
    }

    render() {
        return (
            <div className="device-index">
                <h1>Устройства</h1>
                <p>
                    <Link className="btn btn-success" to="/devices/create">Добавить устройство</Link></p>
                <div id="w0" className="grid-view">
                    <div className="summary">Показаны записи <b>1-40</b> из <b>40</b>.</div>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Название</th>
                            <th>Название категории</th>
                            <th>Название производителя</th>
                            <th>Активен</th>
                            <th className="action-column">&nbsp;</th>
                        </tr>
                        </thead>
                        { this.state.loading ? (<tbody>
                        <tr>
                            <td colSpan="7">Loading... <span
                                className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></td>
                        </tr>
                        </tbody>) :
                            (<tbody>
                            {
                                this.state.devices.map((device, idx) => {
                                        return (
                                            <tr key={device.id}>
                                                <td>{idx}</td>
                                                <td>{device.id}</td>
                                                <td>{device.name}</td>
                                                <td>{device.deviceCategory ? device.deviceCategory.name : ''}</td>
                                                <td>{device.vendor ? device.vendor.name : ''}</td>
                                                <td>{device.enabled ? 'Да' : 'Нет'}</td>
                                                <td>
                                                    <Link to={'/devices/view/' + device.id} title="Просмотр">
                                                        <span className="glyphicon glyphicon-eye-open"></span>
                                                    </Link>
                                                    <Link to={'/devices/update/' + device.id} title="Редактировать">
                                                        <span className="glyphicon glyphicon-pencil"></span>
                                                    </Link>
                                                    <a onClick={this.deleteDevice.bind(this, device.id)} title="Удалить">
                                                        <span className="glyphicon glyphicon-trash"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        )
    }
}


export default connect(null,
    (dispatch) => {
        return {
            changeBreadcrumb: () => dispatch({
                'type': 'CHANGE_BREADCRUMB',
                'payload': {
                    'name': 'devices'
                },
            }),
        }
    })(DeviceList);