import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from "react-bootstrap";
import * as _ from "lodash";


class PositionModal extends React.Component {

    constructor(props) {
        super(props);
        this.onSave = props.onSave;
        this.onClose = props.onClose;
        this.show = props.show;
        this.state = {
            position: !_.isNil(props.position) ? props.position : {
                title: ''
            }
        };
    }

    handleChange(e) {
        let state = this.state;
        _.set(state, 'position.'+e.target.id, e.target.value);
        this.setState(state);
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.show}
                       onHide={this.onClose.bind(this)}
                       aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title>Должность</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup controlId="title">
                                <ControlLabel>Наименование:</ControlLabel>
                                <FormControl type="text"
                                             value={this.state.position.title}
                                             onChange={this.handleChange.bind(this)}>
                                </FormControl>
                                <FormControl.Feedback/>
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.onClose.bind(this)}>Отмена</Button>
                        <Button bsStyle="primary" onClick={() => this.onSave(this.state.position)}>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default PositionModal;