import React from 'react';
import Card from 'react-bootstrap/Card';

const SpotCard = ({ header, title, text }) => {
    return (
        <Card>
            <Card.Header as='h5'>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SpotCard;
