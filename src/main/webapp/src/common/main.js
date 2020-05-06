import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Employee from "../components/pages/employee";
import Car from "../components/pages/car";
import Client from "../components/pages/client";
import Order from "../components/pages/order";
import Position from "../components/pages/position";
import OrderEmployee from "../components/pages/orderEmployee";

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Redirect exact from='/' to="/employee"/>

                    <Route
                        path="/employee"
                        render={(props) => <Employee/>}
                    />

                    <Route
                        path="/car"
                        render={(props) => <Car/>}
                    />

                    <Route
                        path="/client"
                        render={(props) => <Client/>}
                    />

                    <Route
                        path="/position"
                        render={(props) => <Position/>}
                    />

                    <Route
                        path="/order"
                        render={(props) => <Order/>}
                    />

                    <Route
                        path="/orderemployee"
                        render={(props) => <OrderEmployee/>}
                    />

                </Switch>
            </main>
        );
    }

}

export default Main;
