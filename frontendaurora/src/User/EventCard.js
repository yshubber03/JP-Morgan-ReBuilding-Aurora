import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const EventCard = (props) => {
  const { 
    description, 
    date, 
    time, 
    location,
    latitude,  // New prop for the latitude of the event's location
    longitude, // New prop for the longitude of the event's location
    tools 
  } = props;

  const cancelRSVP = () => {
    // Function to cancel RSVP
    // This will probably involve some backend call or other logic
  }

  return (
    <div className="event-card">
      <h3>{description}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
      
      {/* Embedding Google Map */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          center={{ lat: latitude, lng: longitude }}
          zoom={15}
          mapContainerStyle={{ width: '200px', height: '200px' }} 
        />
      </LoadScript>
      
      <p><strong>Tools Needed:</strong> {tools.join(', ')}</p> {/* Convert tools array to comma-separated string */}
      <button onClick={cancelRSVP}>Cancel</button>
    </div>
  )
}

export default EventCard;


