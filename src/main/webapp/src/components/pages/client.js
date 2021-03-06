import React from "react";
import Service from "../service";
import {Alert, AlertContainer} from "react-bs-notifier";
import {Button, ButtonGroup, Row, Table} from "react-bootstrap";
import * as _ from 'lodash';
import ClientModal from "../modals/client";

class Client extends React.Component {

    constructor(props) {
        super(props);
        this.service = new Service('client');
        this.state = {
            show: false,
            rowData: [],
            selected: null,
            isShowingDangerAlert: false,
            isShowingSuccessAlert: false,
            alert: {}
        }
    }

    componentDidMount() {
        this.getAll();
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
                        info: 'Клиента нельзя удалить',
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
                            <div className="title">Клиенты
                                <Button className="right-button"
                                        onClick={() => this.onCreate()}>Добавить</Button></div>
                        </Row>

                </div>
                    <Row>
                        <Table hover condensed responsive>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>ФИО</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                _.map(this.state.rowData, item => {
                                    return <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
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
                    <ClientModal
                        client={this.state.selected}
                        show={this.state.show}
                        onSave={this.onSave.bind(this)}
                        onClose={this.onClose.bind(this)}/>
                }
            </div>
        )
    }
}


export default Client;