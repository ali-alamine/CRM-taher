import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GridCom from '../GridCom/GridCom';

function Home(){
    return (
        <Row>
            <Col>
                <GridCom></GridCom>
            </Col>
        </Row>
    )
}

export default Home;