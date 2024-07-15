import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css'


function Header(props) {
    return (
        <Container>
            <Row className="Header justify-content-center">1
                <Col xs="auto">

                    <h1>Monsters Rolodex</h1>
                </Col>
            </Row >
        </Container>


    );
}

export default Header;