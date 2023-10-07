import React from 'react';
import ResourceCard from './ResourceCard';
import './resources.css';

const Resources = () => {

    // Sample input array
    const cardDataArray = [
      {
        title: 'Carpentry',
        description: 'Description Here',
        imageUrl: './images/carpentry.jpg',
        link: 'https://www.youtube.com/watch?v=y8W7KbJTg7A'
      },
      {
        title: 'Drywall/Plaster Work',
        description: 'Description Here',
      },
      {
        title: 'Electrical',
        description: 'Description Here',
      },
    ];
  
    return (
      <div className="App">
        <h1 style={{ padding: '12px'}}>Volunteer Resources</h1>
        <div className="card-container">
          {cardDataArray.map((data, index) => (
            <ResourceCard key={index} data={data} />
          ))}
        </div>
      </div>
    );
  };

export default Resources;