import React from 'react';
import {Alert, Button} from "react-bootstrap";

class Alerts extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            show: true
        };
    }

    onSubmit() {
        this.setState({show: false});
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle={this.props.style} onDismiss={this.onSubmit}>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.info}</p>
                    <p><Button onClick={this.onSubmit}>{this.props.button}</Button></p>
                </Alert>
            );
        }
    }
}

export default Alerts;