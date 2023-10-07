import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const EventCard = (props) => {
  const {
    id,
    description, 
    date, 
    time, 
    location,
    tools,
    cancelRSVP
  } = props;

  return (
      <div className="card shadow-sm mb-3" id={id}>
          <div className="card-body">
              <h5 className="card-title" >{description}</h5>
              <p className="card-text"><strong>Date:</strong> {date}</p>
              <p className="card-text"><strong>Time:</strong> {time}</p>
              <p className="card-text"><strong>Location:</strong> {location}</p>

              {/* Embedding Google Map */}
              <div className="mt-2 mb-3">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95250.82546373364!2d-88.3067189!3d41.750972350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ee54d4ed5111b%3A0x7fd1f848c350e85d!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1696662104246!5m2!1sen!2sus" 
                width="200" 
                height="200" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                title="Event Location"  // Add a title for accessibility purposes
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
              <p className="card-text"><strong>Tools Needed:</strong> {tools.join(', ')}</p>
              <button className="btn btn-danger" onClick={cancelRSVP}>Cancel</button>
          </div>
      </div>

  )
}

export default EventCard;


