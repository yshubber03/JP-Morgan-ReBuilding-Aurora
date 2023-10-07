import React from 'react';
// Creates a component for displaying each event item
import EventItem from './EventItem'; 

function EventList({ events, onEventClick }) {
  return (
    <ul>
      {events.map((event) => (
        <EventItem
        // Uses a unique identifier for each event
          key={event.id} 
          event={event}
          onClick={() => onEventClick(event)}
        />
      ))}
    </ul>
  );
}

export default EventList;