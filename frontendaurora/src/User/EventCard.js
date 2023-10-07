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
      <div className="card shadow-sm mb-3">
          <div className="card-body">
              <h5 className="card-title">{description}</h5>
              <p className="card-text"><strong>Date:</strong> {date}</p>
              <p className="card-text"><strong>Time:</strong> {time}</p>
              <p className="card-text"><strong>Location:</strong> {location}</p>

              {/* Embedding Google Map */}
              <div className="mt-2 mb-3">
                  <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                      <GoogleMap
                          center={{ lat: latitude, lng: longitude }}
                          zoom={15}
                          mapContainerStyle={{ width: '100%', height: '200px' }}
                      />
                  </LoadScript>
              </div>
              <p className="card-text"><strong>Tools Needed:</strong> {tools.join(', ')}</p>
              <button className="btn btn-danger" onClick={cancelRSVP}>Cancel</button>
          </div>
      </div>

  )
}

export default EventCard;


