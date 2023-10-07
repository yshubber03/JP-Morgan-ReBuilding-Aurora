import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './resources.css';

const ResourceCard = ({ data, index }) => {
  return (
    <Card style={{ width: '18rem' }} className = "resource-card">
      <Card.Img className="card-image" src={data.imageUrl} alt="Card image" />
      <Card.Body>
        <Card.Title >{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={data.link}>Video </Card.Link>
      </Card.Body>
    </Card>
    );
}

export default ResourceCard;