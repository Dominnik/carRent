import React from "react";
import Service from "../service";
import {Alert, AlertContainer} from "react-bs-notifier";
import {Button, ButtonGroup, Row, Table} from "react-bootstrap";
import * as _ from 'lodash';
import EmployeeModal from "../modals/employee";

class Employee extends React.Component {

    constructor(props) {
        super(props);
        this.service = new Service('employee');
        this.positionService = new Service('position');
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
        this.getAllPositions();
    }

    getAllPositions(){
        this.positionService.getAll().then((items) => {
            this.setState({positions: items, show: false});
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
        if (!item.position.id && this.state.positions.length)
            item.position = this.state.positions[0];

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
                        info: 'Сотрудника нельзя удалить',
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
                            <div className="name">Сотрудники
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
                                <th>Опыт вождения</th>
                                <th>Телефон</th>
                                <th>Вод. удостоверение</th>
                                <th>Должность</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                _.map(this.state.rowData, item => {
                                    return <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.experience}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.license}</td>
                                        <td>{item.position.title}</td>
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
                    <EmployeeModal
                        positions={this.state.positions}
                        employee={this.state.selected}
                        show={this.state.show}
                        onSave={this.onSave.bind(this)}
                        onClose={this.onClose.bind(this)}/>
                }
            </div>
        )
    }
}


export default Employee;