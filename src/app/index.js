import React/* , { useEffect, useState } */ from 'react';
import TableReady from '../Components/Table';
import { Row, Col } from 'antd';
/* import getWorkers from '../utils/api'; */

export const App = () => {
    /* const [workers, setWorkers] = useState([]);

    useEffect(() => {
        getWorkers()
            .then((res) => {
                setWorkers(res);
                renderInfo();
            }).catch((err) => console.log(err));
        }, [])

const renderInfo = () => {} */

    return (
        <div className="main">
        <Row key={Math.random()}>
            <Col key={Math.random()}>
                <TableReady key={Math.random()} />
            </Col>
        </Row>
        </div>
    ); 
}
