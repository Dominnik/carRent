import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import * as _ from "lodash";

class OrderModal extends React.Component {

    constructor(props) {
        super(props);
        this.onSave = props.onSave;
        this.onClose = props.onClose;
        this.show = props.show;
        this.state = {
            clients: props.clients,
            cars: props.cars,
            order: !_.isNil(props.order) ? props.order : {
                description: '',
                address: '',
                client: {},
                car: {}
            }

        };
    }

    handleChange(e) {
        let state = this.state;
        _.set(state, 'order.'+e.target.id, e.target.value);
        this.setState(state);
    }

    handleChangeClient(){
        let state = this.state;
        _.set(state, 'order.client', _.find(this.state.clients, {id: parseInt(this.inputEl1.value)}));
        this.setState(state);
    }

    handleChangeCar(){
        let state = this.state;
        _.set(state, 'order.car', _.find(this.state.cars, {id: parseInt(this.inputEl2.value)}));
        this.setState(state);
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.show}
                       onHide={this.onClose.bind(this)}
                       aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title>Заказ</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup controlId="description">
                                <ControlLabel>Описание заказа:</ControlLabel>
                                <FormControl type="text"
                                             value={this.state.order.description}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="address">
                                <ControlLabel>Адрес:</ControlLabel>
                                <FormControl type="text"
                                             value={this.state.order.address}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="post">
                                <ControlLabel> Клиент:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                             inputRef={ el => this.inputEl1=el }
                                             onChange={this.handleChangeClient.bind(this)}>
                                    {
                                        _.map(this.state.clients, function (item) {
                                            return <option key={item.id} value={item.id} selected={!_.isNil(this.state.order.client.id) && this.state.order.client.id === item.id}>{item.name}</option>
                                        }.bind(this))
                                    }
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="post">
                                <ControlLabel>Автомобиль:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                             inputRef={ el => this.inputEl2=el }
                                             onChange={this.handleChangeCar.bind(this)}>
                                    {
                                        _.map(this.state.cars, function (item) {
                                            return <option key={item.id} value={item.id} selected={!_.isNil(this.state.order.car.id) && this.state.order.car.id === item.id}>{item.number}</option>
                                        }.bind(this))
                                    }
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.onClose.bind(this)}>Отмена</Button>
                        <Button bsStyle="primary" onClick={() => this.onSave(this.state.order)}>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default OrderModal;