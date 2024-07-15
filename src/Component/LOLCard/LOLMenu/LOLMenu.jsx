import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import SearchBox from '../../SearchBox./SearchBox';
import './LOLMenu.css'
import LOLCard from '../LOLCard/LOLCard';

function LOLMenu(props) {
    const [champions, setChampions] = useState([]);
    const [searchTerm, setSeartem] = useState('');
    const [championsFilter, setChampionsFilter] = useState([])
    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/champion.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setChampionsFilter(Object.values(data.data))
                setChampions(Object.values(data.data))
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);
    const handleInputSearch = (event) => {
        const term = event.target.value
        const filtered = champions.filter((champion) => champion.name.toLowerCase().includes(term.toLowerCase()))
        setChampionsFilter(filtered)
    }
    return (

        <Container>
            <Row className='justify-content-md-center headerLOLMenu'>
                <Col xs='auto'>
                    <h1>League Of Legend</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs='auto'>
                    <SearchBox inputChange={handleInputSearch}></SearchBox>
                </Col>
            </Row>
            <Row>
                {championsFilter.map((champion) => (
                    <Col key={champion.key} xs='auto' style={{ paddingBottom: '20px' }} sm='3'>
                        <LOLCard props={champion}></LOLCard>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

export default LOLMenu;