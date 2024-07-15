import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MonsterCard from './MonsterCard';
import { Col, Container, Row } from 'react-bootstrap';
import SearchBox from '../SearchBox./SearchBox';


function Monster(props) {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json()
        }).then((data) => (
            setUsers(data),
            setResults(data)

        )).catch(() => {
            console.log("Error")
        })
    }, [])
    const handleInputChange = (event) => {

        setSearchTerm(event.target.value)

        const fillterUser = users.filter((user) =>
            user.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        //users.map((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setResults(fillterUser)
        console.log(results)
    }
    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Lọc danh sách người dùng dựa trên tên
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(term.toLowerCase())
        );
        setResults(filtered);
    };
    return (
        < Container >
            <Row className="justify-content-center">
                <Col xs="auto" >
                    <SearchBox inputChangeHandler={handleSearch}></SearchBox>
                </Col>
            </Row>
            <Row >
                {results.map((user, index) => (
                    <Col xs="auto" key={user.id} style={{ paddingBottom: '20px' }} md={3}>
                        <MonsterCard key={user.id} props={user}></MonsterCard>
                    </Col>
                ))}
            </Row>

        </Container >
    );
}

export default Monster;