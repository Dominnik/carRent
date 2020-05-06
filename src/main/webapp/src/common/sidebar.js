import React from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";


class Sidebar extends React.Component {
    render() {
        return (
            <Navbar className="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav pullLeft>
                    <NavItem eventKey={7} href="/logout">
                        Выйти
                    </NavItem>
                </Nav>
                <Nav fill variant="tabs" defaultActiveKey={2} pullRight>
                    <NavItem eventKey={2} href="/car">
                        Автомобиль
                    </NavItem>
                    <NavItem eventKey={3} href="/client">
                        Клиент
                    </NavItem>
                    <NavItem eventKey={4} href="/position">
                        Должность
                    </NavItem>
                    <NavItem eventKey={1} href="/employee">
                        Сотрудники
                    </NavItem>
                    <NavItem eventKey={5} href="/order">
                        Заказы
                    </NavItem>
                    <NavItem eventKey={6} href="/orderemployee">
                        Сотрудники - Заказы
                    </NavItem>
                </Nav>

            </Navbar>
        );
    }
}

export default Sidebar;