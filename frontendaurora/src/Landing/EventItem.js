import React from 'react';

function EventItem({ event, onSignUp }) {
  // Implement the rendering of an event item
  return (
    <li>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      {/* Add more event details here */}
      <button onClick={() => onSignUp(event)}>Sign Up</button>
    </li>
  );
}

export default EventItem;