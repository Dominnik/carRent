import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import * as _ from "lodash";


class CarModal extends React.Component {

    constructor(props) {
        super(props);
        this.onSave = props.onSave;
        this.onClose = props.onClose;
        this.show = props.show;
        this.state = {
            car: !_.isNil(props.car) ? props.car : {
                number: ''
            }
        };
    }

    handleChange(e) {
        let state = this.state;
        _.set(state, 'car.'+e.target.id, e.target.value);
        this.setState(state);
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.show}
                       onHide={this.onClose.bind(this)}
                       aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title>Автомобиль</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup controlId="number">
                                <ControlLabel>Марка авто:</ControlLabel>
                                <FormControl type="text"
                                             value={this.state.car.number}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.onClose.bind(this)}>Отмена</Button>
                        <Button bsStyle="primary" onClick={() => this.onSave(this.state.car)}>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CarModal;