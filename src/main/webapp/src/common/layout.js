import React from 'react';
import Main from "./main";
import Sidebar from "./sidebar";

import {Grid, Row} from "react-bootstrap";


class Layout extends React.Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <Grid>
                    <Row>
                        <Main/>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default Layout;