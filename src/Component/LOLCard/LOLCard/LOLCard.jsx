import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row } from 'react-bootstrap';
import './LOLCard.css'

function LOLCard(props) {
    const [champion, setChampion] = useState({});
    useEffect(() => {
        setChampion(props.props)
    }, [])
    if (!champion || !champion.image || !champion.image.full) {
        return <div></div>;
    }
    console.log(`https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/${champion.name}_0.jpg`)
    return (

        <Card className="text-center Champion-Card"  >
            <Card.Img variant="top" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
            <Card.Body>
                <Card.Title className='Champion-Card-text'>{champion.name}</Card.Title>
            </Card.Body>
        </Card>


    );
}

export default LOLCard;