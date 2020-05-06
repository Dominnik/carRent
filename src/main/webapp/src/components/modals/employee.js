import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import * as _ from "lodash";


class EmployeeModal extends React.Component {

    constructor(props) {
        super(props);
        this.onSave = props.onSave;
        this.onClose = props.onClose;
        this.show = props.show;
        this.state = {
            positions: props.positions,
            employee: !_.isNil(props.employee) ? props.employee : {
                name: '',
                experience: 0,
                phone: 0,
                license: 0,
                position: {}
            }
        };
    }

    handleChangePosition(){
        let state = this.state;
        _.set(state, 'employee.position', _.find(this.state.positions, {id: parseInt(this.inputEl1.value)}));
        this.setState(state);
    }


    handleChange(e) {
        let state = this.state;
        _.set(state, 'employee.'+e.target.id, e.target.value);
        this.setState(state);
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.show}
                       onHide={this.onClose.bind(this)}
                       aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title>Сотрудник</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup controlId="name">
                                <ControlLabel>ФИО:</ControlLabel>
                                <FormControl type="text"
                                             value={this.state.employee.name}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="experience">
                                <ControlLabel>Опыт вождения:</ControlLabel>
                                <FormControl type="number"
                                             value={this.state.employee.experience}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="phone">
                                <ControlLabel>Телефон:</ControlLabel>
                                <FormControl type="text"
                                             value={this.state.employee.phone}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="license">
                                <ControlLabel>Вод. удостоверение:</ControlLabel>
                                <FormControl type="number"
                                             value={this.state.employee.license}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup controlId="post">
                                <ControlLabel>Должность:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                             inputRef={ el => this.inputEl1=el }
                                             onChange={this.handleChangePosition.bind(this)}>
                                    {
                                        _.map(this.state.positions, function (item) {
                                            return <option key={item.id} value={item.id} selected={!_.isNil(this.state.employee.position.id) && this.state.employee.position.id === item.id}>{item.title}</option>
                                        }.bind(this))
                                    }
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.onClose.bind(this)}>Отмена</Button>
                        <Button bsStyle="primary" onClick={() => this.onSave(this.state.employee)}>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default EmployeeModal;