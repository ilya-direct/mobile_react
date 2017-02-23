import React, {Component} from 'react';


export default class DeviceList extends Component {

    render() {
        return (
            <div className="device-index">
                <h1>Устройства</h1>
                <p>
                    <a className="btn btn-success" href="/content/device/create">Добавить устройство</a></p>
                <div id="w0" className="grid-view">
                    <div className="summary">Показаны записи <b>1-40</b> из <b>40</b>.</div>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th><a className="asc" href="/content/device/index?sort=-name"
                                   data-sort="-name">Название</a></th>
                            <th>Название категории</th>
                            <th>Название производителя</th>
                            <th>Активен</th>
                            <th className="action-column">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr data-key="28">
                            <td>1</td>
                            <td>28</td>
                            <td>LG K8</td>
                            <td>Телефоны</td>
                            <td>Lg</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=28" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=28" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=28" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="30">
                            <td>2</td>
                            <td>30</td>
                            <td>LG Nexus 5X</td>
                            <td>Телефоны</td>
                            <td>Lg</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=30" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=30" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=30" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="31">
                            <td>3</td>
                            <td>31</td>
                            <td>LG X Power</td>
                            <td>Телефоны</td>
                            <td>Lg</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=31" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=31" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=31" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="19">
                            <td>4</td>
                            <td>19</td>
                            <td>Lenovo TAB 2</td>
                            <td>Планшеты</td>
                            <td>Lenovo</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=19" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=19" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=19" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="12">
                            <td>5</td>
                            <td>12</td>
                            <td>Meizu M2 mini</td>
                            <td>Телефоны</td>
                            <td>Meizu</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=12" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=12" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=12" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="32">
                            <td>6</td>
                            <td>32</td>
                            <td>Meizu M3 Note</td>
                            <td>Телефоны</td>
                            <td>Meizu</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=32" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=32" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=32" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="16">
                            <td>7</td>
                            <td>16</td>
                            <td>Meizu M3s</td>
                            <td>Телефоны</td>
                            <td>Meizu</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=16" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=16" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=16" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="33">
                            <td>8</td>
                            <td>33</td>
                            <td>Meizu Pro 6</td>
                            <td>Телефоны</td>
                            <td>Meizu</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=33" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=33" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=33" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="34">
                            <td>9</td>
                            <td>34</td>
                            <td>Samsung Galaxy A3</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=34" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=34" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=34" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="3">
                            <td>10</td>
                            <td>3</td>
                            <td>Samsung Galaxy A5</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=3" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=3" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=3" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="35">
                            <td>11</td>
                            <td>35</td>
                            <td>Samsung Galaxy J3</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=35" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=35" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=35" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="36">
                            <td>12</td>
                            <td>36</td>
                            <td>Samsung Galaxy J7</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=36" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=36" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=36" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="37">
                            <td>13</td>
                            <td>37</td>
                            <td>Samsung Galaxy S6 Edge</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=37" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=37" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=37" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="38">
                            <td>14</td>
                            <td>38</td>
                            <td>Samsung Galaxy S7</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=38" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=38" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=38" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="20">
                            <td>15</td>
                            <td>20</td>
                            <td>Samsung Galaxy Tab A</td>
                            <td>Планшеты</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=20" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=20" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=20" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="21">
                            <td>16</td>
                            <td>21</td>
                            <td>Samsung Galaxy Tab E 9.6</td>
                            <td>Планшеты</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=21" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=21" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=21" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="23">
                            <td>17</td>
                            <td>23</td>
                            <td>Samsung Galaxy Tab S2</td>
                            <td>Планшеты</td>
                            <td>Samsung</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=23" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=23" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=23" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="8">
                            <td>18</td>
                            <td>8</td>
                            <td>iPad Air 2</td>
                            <td>Планшеты</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=8" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=8" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=8" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="14">
                            <td>19</td>
                            <td>14</td>
                            <td>iPad Pro</td>
                            <td>Планшеты</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=14" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=14" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=14" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="18">
                            <td>20</td>
                            <td>18</td>
                            <td>iPad mini 4</td>
                            <td>Планшеты</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=18" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=18" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=18" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="24">
                            <td>21</td>
                            <td>24</td>
                            <td>iPhone 4</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=24" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=24" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=24" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="11">
                            <td>22</td>
                            <td>11</td>
                            <td>iPhone 4S</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=11" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=11" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=11" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="1">
                            <td>23</td>
                            <td>1</td>
                            <td>iPhone 5C</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=1" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=1" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=1" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="10">
                            <td>24</td>
                            <td>10</td>
                            <td>iPhone 5S</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=10" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=10" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=10" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="5">
                            <td>25</td>
                            <td>5</td>
                            <td>iPhone 6</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=5" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=5" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=5" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="26">
                            <td>26</td>
                            <td>26</td>
                            <td>iPhone 6S</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=26" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=26" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=26" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="25">
                            <td>27</td>
                            <td>25</td>
                            <td>iPhone 6S Plus</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=25" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=25" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=25" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="27">
                            <td>28</td>
                            <td>27</td>
                            <td>iPhone SE</td>
                            <td>Телефоны</td>
                            <td>Apple</td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=27" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=27" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=27" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="15">
                            <td>29</td>
                            <td>15</td>
                            <td>Компьютер</td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=15" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=15" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=15" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="17">
                            <td>30</td>
                            <td>17</td>
                            <td>Ноутбук</td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td>Да</td>
                            <td><a href="/content/device/view?id=17" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=17" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=17" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="45">
                            <td>31</td>
                            <td>45</td>
                            <td>LG k10</td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=45" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=45" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=45" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="44">
                            <td>32</td>
                            <td>44</td>
                            <td>Loise</td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=44" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=44" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=44" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="9">
                            <td>33</td>
                            <td>9</td>
                            <td>Meizu M2</td>
                            <td>Телефоны</td>
                            <td>Meizu</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=9" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=9" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=9" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="6">
                            <td>34</td>
                            <td>6</td>
                            <td>Nexus</td>
                            <td>Телефоны</td>
                            <td>Google</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=6" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=6" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=6" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="4">
                            <td>35</td>
                            <td>4</td>
                            <td>Nokia 7220</td>
                            <td>Телефоны</td>
                            <td>Nokia</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=4" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=4" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=4" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="2">
                            <td>36</td>
                            <td>2</td>
                            <td>Samsung Galaxy S2</td>
                            <td>Телефоны</td>
                            <td>Samsung</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=2" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=2" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=2" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="22">
                            <td>37</td>
                            <td>22</td>
                            <td>Samsung Galaxy Tab S2 8.0</td>
                            <td>Планшеты</td>
                            <td>Samsung</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=22" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=22" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=22" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="7">
                            <td>38</td>
                            <td>7</td>
                            <td>Sony Vaio</td>
                            <td>Ноутбуки</td>
                            <td>Sony</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=7" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=7" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=7" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="42">
                            <td>39</td>
                            <td>42</td>
                            <td>Новое Тестовое</td>
                            <td>Телефоны</td>
                            <td>Google</td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=42" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=42" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=42" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        <tr data-key="43">
                            <td>40</td>
                            <td>43</td>
                            <td>Тестовое устройство 2</td>
                            <td>Телефоны</td>
                            <td><span className="not-set">(не задано)</span></td>
                            <td>Нет</td>
                            <td><a href="/content/device/view?id=43" title="Просмотр" aria-label="Просмотр"
                                   data-pjax="0"><span className="glyphicon glyphicon-eye-open"></span></a> <a
                                href="/content/device/update?id=43" title="Редактировать" aria-label="Редактировать"
                                data-pjax="0"><span className="glyphicon glyphicon-pencil"></span></a> <a
                                href="/content/device/delete?id=43" title="Удалить" aria-label="Удалить"
                                data-confirm="Вы уверены, что хотите удалить этот элемент?" data-method="post"
                                data-pjax="0"><span className="glyphicon glyphicon-trash"></span></a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}