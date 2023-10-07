import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './resources.css';

const ResourceCard = ({ data }) => {
  const [showCollapse, setShowCollapse] = useState(false);

  const toggleCollapse = () => {
    setShowCollapse(!showCollapse);
  };

  return (
    <Card style={{ width: '18rem' }} className="resource-card">
      <Card.Img className="card-image" src={data.imageUrl} alt="Card image" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={data.link}>Video</Card.Link>
        <button
          className="btn btn-link"
          type="button"
          onClick={toggleCollapse}
          aria-expanded={showCollapse}
        >
          Toggle Collapse
        </button>
        <div className={`collapse ${showCollapse ? 'show' : ''}`}>
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
