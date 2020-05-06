import React from "react";
import Service from "../service";
import {Alert, AlertContainer} from "react-bs-notifier";
import {Button, ButtonGroup, Row, Table} from "react-bootstrap";
import * as _ from 'lodash';
import OrderEmployeeModal from "../modals/orderEmployee";

class OrderEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.service = new Service('orderemployee');
        this.employeeService = new Service('employee');
        this.orderService = new Service('order');
        this.state = {
            show: false,
            orders: [],
            employees: [],
            rowData: [],
            selected: null,
            isShowingDangerAlert: false,
            isShowingSuccessAlert: false,
            alert: {}
        }
    }

    componentDidMount() {
        this.getAll();
        this.getAllEmployees();
        this.getAllOrders();
    }

    getAllOrders(){
        this.orderService.getAll().then((items) => {
            this.setState({orders: items});
        })
    }

    getAllEmployees(){
        this.employeeService.getAll().then((items) => {
            this.setState({employees: items});
        })
    }

    getAll() {
        this.service.getAll().then((items) => {
            this.setState({rowData: items, show: false});
        })
    }

    onCreate() {
        this.setState({show: true});
    }

    onSave(item) {
        if (!item.order.id && this.state.orders.length)
            item.order = this.state.orders[0];

        if (!item.employee.id && this.state.employees.length)
            item.employee = this.state.employees[0];

        this.service.save(item).then(() => {
            this.getAll();
        })
    }

    onEdit(item) {
        this.setState({show: true, selected: item});
    }

    onClose() {
        this.setState({show: false})
    }

    onDelete(id) {
        this.service.canDelete(id).then((result) => {
            if (result) {
                this.service.delete(id).then(() => {
                    this.getAll();
                })
            } else {
                this.setState({
                    alert: {
                        info: 'Сотрудника из заказа нельзя удалить',
                        title: 'Удаление невозможно'
                    },
                    isShowingDangerAlert: true
                });
            }
        })
    }

    onAlertDismissed() {
        this.setState({isShowingDangerAlert: false, isShowingSuccessAlert: false})
    }

    render() {
        return (
            <div>
                <AlertContainer position="top-left">
                    {this.state.isShowingSuccessAlert ? (
                        <Alert type="success" timeout={2000} headline={this.state.alert.title}
                               onDismiss={this.onAlertDismissed.bind(this)}>
                            {this.state.alert.info}
                        </Alert>
                    ) : null}

                    {this.state.isShowingDangerAlert ? (
                        <Alert type="danger" timeout={2000} headline={this.state.alert.title}
                               onDismiss={this.onAlertDismissed.bind(this)}>
                            {this.state.alert.info}
                        </Alert>
                    ) : null}
                </AlertContainer>
                <Row>
                </Row>
                <div className="header">

                        <Row className="page-title">
                            <div className="title">Сотрудники - Заказы
                                <Button className="right-button"
                                        onClick={() => this.onCreate()}>Добавить</Button></div>
                        </Row>

                </div>
                    <Row>
                        <Table hover condensed responsive>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Описание заказа</th>
                                <th>ФИО сотрудника</th>
                                <th>Оплата сотрудника</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                _.map(this.state.rowData, item => {
                                    return <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.order.description}</td>
                                        <td>{item.employee.name}</td>
                                        <td>{item.payment}</td>
                                        <td>
                                            <ButtonGroup vertical>
                                                <Button onClick={() => this.onEdit(item)}>Редактировать</Button>
                                                <Button onClick={() => this.onDelete(item.id)}>Удалить</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                })
                            }

                            </tbody>
                        </Table>
                    </Row>
                {
                    this.state.show &&
                    <OrderEmployeeModal
                        employees={this.state.employees}
                        orders={this.state.orders}
                        orderEmployee={this.state.selected}
                        show={this.state.show}
                        onSave={this.onSave.bind(this)}
                        onClose={this.onClose.bind(this)}/>
                }
            </div>
        )
    }
}


export default OrderEmployee;