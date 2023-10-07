import React from 'react';

const EventCard = (props) => {
  const { 
    description, 
    date, 
    time, 
    location, 
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
      <p><strong>Tools Needed:</strong> {tools.join(', ')}</p> {/* Convert tools array to comma-separated string */}
      <button onClick={cancelRSVP}>Cancel RSVP</button>
    </div>
  )
}

export default EventCard;

