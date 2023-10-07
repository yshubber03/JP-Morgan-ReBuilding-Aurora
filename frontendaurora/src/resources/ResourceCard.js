import React from 'react';
import Card from 'react-bootstrap/Card';
import './resources.css';

const ResourceCard = ({ data }) => {
  return (
    <Card style={{ width: '18rem'}} className="resource-card">
        <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default ResourceCard;