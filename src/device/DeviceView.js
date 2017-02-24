import React from 'react';
import MyDispatcher from '../MyDispatcher';

export default class DeviceView extends React.Component {

    componentWillMount() {
        MyDispatcher.dispatch({
            'type' : 'CHANGE_BREADCRUMB',
            'name' : 'deviceView',
            'properties': {
                id: this.props.id,
                name: 'A3',
            }
        })
    }

    render() {

        // Query params
        // console.log(this.props.location.query);
        console.log(this.props);
        return (
            <div className="device-view">

                <h1>Samsung Galaxy A3</h1>

                <p>
                    <a className="btn btn-primary" href="/content/device/update?id=34">Редактировать</a> <a
                    className="btn btn-danger" href="/content/device/delete?id=34"
                    data-confirm="Вы действительно хотите удалить устройство?" data-method="post">Удалить</a></p>

                <table id="w0" className="table table-striped table-bordered detail-view">
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{ this.props.params.id }</td>
                    </tr>
                    <tr>
                        <th>Название</th>
                        <td>Samsung Galaxy A3</td>
                    </tr>
                    <tr>
                        <th>Alias</th>
                        <td>samsung-galaxy-a3</td>
                    </tr>
                    <tr>
                        <th>Изображение</th>
                        <td> -</td>
                    </tr>
                    <tr>
                        <th>Описание</th>
                        <td><span className="not-set">(не задано)</span></td>
                    </tr>
                    <tr>
                        <th>Название категории</th>
                        <td>Телефоны</td>
                    </tr>
                    <tr>
                        <th>Активен</th>
                        <td>Да</td>
                    </tr>
                    <tr>
                        <th>Название производителя</th>
                        <td>Samsung</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}