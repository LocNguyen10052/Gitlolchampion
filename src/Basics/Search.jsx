import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';


class Search extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            searchTerm: '',

        }


    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
            return data.json()
        }).then((monsters) => {
            this.setState(() => {
                return { users: monsters }
            }, () => { })
        })

    }
    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
        console.log(event)
    };

    render() {
        const { users, searchTerm } = this.state;
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <Container>
                <Row>
                    <Form className="mb-4">
                        <Form.Group controlId="search">
                            <Form.Control
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={this.handleInputChange}

                            />
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    {
                        filteredUsers.map((user, index) => (
                            <Col key={user.id} xs={12} sm={6} md={3} className="mb-4">{user.name}</Col>
                        ))
                    }
                </Row>
            </Container>

        );
    }
}

export default Search;