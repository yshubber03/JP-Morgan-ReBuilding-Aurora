import React from 'react';
import ResourceCard from './ResourceCard';
import './resources.css';
import carpentryImage from '../images/carpentry.jpg';
import drywallImage from '../images/drywall.jpg';
import electricalImage from '../images/electrical.jpg';
import flooringImage from '../images/flooring.jpg';

const Resources = () => {

    // Sample input array
    const cardDataArray = [
      {
        title: 'Carpentry',
        description: 'Learn how to craft custom furniture, build shelving units, and construct wooden fixtures.',
        imageUrl: carpentryImage,
        link: 'https://www.youtube.com/watch?v=y8W7KbJTg7A',
        videoLinks: ['https://www.youtube.com/watch?v=y8W7KbJTg7A', 'https://www.youtube.com/watch?v=7VpzUYln8g4']
      },
      {
        title: 'Drywall/Plaster Work',
        description: 'Master the art of repairing wall cracks, applying smooth plaster finishes, and installing drywall.',
        imageUrl: drywallImage,
        link: 'https://www.youtube.com/watch?v=7VpzUYln8g4'
      },
      {
        title: 'Electrical',
        description: 'Safely wire lighting fixtures, outlets, and switches while troubleshooting electrical issues.',
        imageUrl: electricalImage,
        link: 'https://www.youtube.com/watch?v=hEDto-bnHKw'
      },
      {
        title: 'Flooring',
        description: 'Safely wire lighting fixtures, outlets, and switches while troubleshooting electrical issues.',
        imageUrl: flooringImage,
        link: 'https://www.youtube.com/watch?v=lP7B9B7WX1E'
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