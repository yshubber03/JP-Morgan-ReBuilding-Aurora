import React, { useState } from 'react';
import EventItem from './EventItem'; 

function EventList({ events }) {
    const [signedUpEvents, setSignedUpEvents] = useState([]);
  
    const handleSignUp = (event) => {
    };
  
    return (
      <div>
        <h1>All Events</h1>
        <ul>
          {events.map((event) => (
            <EventItem
              key={event.id} 
              event={event}
              onSignUp={handleSignUp} 
            />
          ))}
        </ul>
      </div>
    );
  }
  
  export default EventList;