import React from 'react';
// import './App.css';
// import $ from 'jquery';
import emitter from 'event-emitter';
import MyDispatcher from './MyDispatcher';
import {Link} from 'react-router';

class Home extends React.Component {

    e;

    constructor(props) {
        super(props);
        let e = emitter({});
        e.on('test', function () {
            console.log('test event');
        });
    }

    componentWillMount() {
        this.props.setBreadcrumb('Home');
        MyDispatcher.dispatch({
            type : 'CHANGE_BREADCRUMB',
            name: 'home',
        });
    }


    componentDidMount() {



        // this.props.router.push('/login');
    }

    render() {
        let e = emitter({});
        e.emit('test');
        return (
            <div className="site-index">
                <div className="body-content">
                    <div className="panel panel-default">
                        <div className="list-group">
                            <a href="/order" className="list-group-item">
                                <h4 className="list-group-item-heading">Заказы</h4>
                                <p className="list-group-item-text">Создание и редактирование заказов</p>
                            </a>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Контент</div>
                        <div className="list-group">
                            <a href="/content/news" className="list-group-item">
                                <h4 className="list-group-item-heading">Новости</h4>
                                <p className="list-group-item-text">Список новостей для сайта</p>
                            </a>
                            <Link to="/devices" className="list-group-item">
                                <h4 className="list-group-item-heading">Устройства</h4>
                                <p className="list-group-item-text">Устройства, которые мы ремонтируем с ценами и
                                    акциями</p>
                            </Link>
                            <a href="/content/service" className="list-group-item">
                                <h4 className="list-group-item-heading">Услуги</h4>
                                <p className="list-group-item-text">Услуги, которые мы предоставляем по ремонту</p>
                            </a>
                            <a href="/content/device-category" className="list-group-item">
                                <h4 className="list-group-item-heading">Категории</h4>
                                <p className="list-group-item-text">Категории устройств по брендам. Древовидная
                                    структура</p>
                            </a>
                            <a href="/content/vendor" className="list-group-item">
                                <h4 className="list-group-item-heading">Производители</h4>
                                <p className="list-group-item-text">Производители устройств</p>
                            </a>
                            <a href="/content/price-list" className="list-group-item">
                                <h4 className="list-group-item-heading">Прайс-листы</h4>
                                <p className="list-group-item-text">Загрузка и выгрузка цен по услугам на устройства в
                                    формате CSV</p>
                            </a>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Настройки</div>
                        <div className="list-group">
                            <a href="/settings/user" className="list-group-item">
                                <h4 className="list-group-item-heading">Сотрудники компании</h4>
                                <p className="list-group-item-text">Редактирование профилей сотрудников</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;