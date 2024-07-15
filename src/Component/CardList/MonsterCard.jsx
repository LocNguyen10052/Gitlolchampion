import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './MonsterCard.css'

function MonsterCard(props) {
    const [monster, setMonster] = useState({});

    useEffect(() => {
        setMonster(props.props);
    }, [props.props]);
    return (

        <div>
            <Card className="text-center Monster-Card" key={monster.id} >
                <Card.Img variant="top" src={`https://robohash.org/${monster.id}`} />
                <Card.Body>
                    <Card.Title >{monster.name}</Card.Title>
                    <Card.Text>
                        {monster.email}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div >
    );
}

export default MonsterCard;