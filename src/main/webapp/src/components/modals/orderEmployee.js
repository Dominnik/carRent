import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import * as _ from "lodash";

class OrderEmployeeModal extends React.Component {

    constructor(props) {
        super(props);
        this.onSave = props.onSave;
        this.onClose = props.onClose;
        this.show = props.show;
        this.state = {
            employees: props.employees,
            orders: props.orders,
            orderEmployee: !_.isNil(props.orderEmployee) ? props.orderEmployee : {
                payment: 0,
                employee: {},
                order: {}
            }

        };
    }

    handleChange(e) {
        let state = this.state;
        _.set(state, 'orderEmployee.'+e.target.id, e.target.value);
        this.setState(state);
    }

    handleChangeEmployee(){
        let state = this.state;
        _.set(state, 'orderEmployee.employee', _.find(this.state.employees, {id: parseInt(this.inputEl1.value)}));
        this.setState(state);
    }

    handleChangeOrder(){
        let state = this.state;
        _.set(state, 'orderEmployee.order', _.find(this.state.orders, {id: parseInt(this.inputEl2.value)}));
        this.setState(state);
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.show}
                       onHide={this.onClose.bind(this)}
                       aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title>Сотрудники - Заказы</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup controlId="employee">
                                <ControlLabel>Сотрудник:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                             inputRef={ el => this.inputEl1=el }
                                             onChange={this.handleChangeEmployee.bind(this)}>
                                    {
                                        _.map(this.state.employees, function (item) {
                                            return <option key={item.id} value={item.id} selected={!_.isNil(this.state.orderEmployee.employee.id) && this.state.orderEmployee.employee.id === item.id}>{item.name}</option>
                                        }.bind(this))
                                    }
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="post">
                                <ControlLabel>Заказ:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                             inputRef={ el => this.inputEl2=el }
                                             onChange={this.handleChangeOrder.bind(this)}>
                                    {
                                        _.map(this.state.orders, function (item) {
                                            return <option key={item.id} value={item.id} selected={!_.isNil(this.state.orderEmployee.order.id) && this.state.orderEmployee.order.id === item.id}>{item.description}</option>
                                        }.bind(this))
                                    }
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="payment">
                                <ControlLabel>Оплата сотрудника:</ControlLabel>
                                <FormControl type="number"
                                             value={this.state.orderEmployee.payment}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.onClose.bind(this)}>Отмена</Button>
                        <Button bsStyle="primary" onClick={() => this.onSave(this.state.orderEmployee)}>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default OrderEmployeeModal;