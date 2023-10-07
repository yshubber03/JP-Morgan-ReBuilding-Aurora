import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Admin from '../Admin.js';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [adminData, setAdminData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventList = [
    { title: 'Event 1', date: new Date(2023, 7, 5), description: 'Description for Event 1' },
    // Add more events here
  ];

  const callBackAdminData = (eventsList) => {
    setAdminData(eventsList);
    console.log(eventsList.length);
    setCount(count + 1);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  const renderEventsForDate = (dateToRender) => {
    const eventsForDate = eventList.filter((event) => {
      return (
        event.date.getDate() === dateToRender.getDate() &&
        event.date.getMonth() === dateToRender.getMonth() &&
        event.date.getFullYear() === dateToRender.getFullYear()
      );
    });

    return eventsForDate.map((event, index) => (
      <div
        key={index}
        className="event"
        onClick={() => handleEventClick(event)}
      >
        {event.title}
      </div>
    ));
  };

  const customTileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventsContent = renderEventsForDate(date);
      return <div>{eventsContent}</div>;
    }
    return null;
  };

  return (
    <div className="app">
      <h1 className="header">Upcoming Volunteer Opportunities</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={customTileContent}
        />
      </div>
      <div>
        <Admin eventDate={date} parentCallback={callBackAdminData} />
      </div>
      <div className="text-center">
        <h2>Selected date: {date.toDateString()}</h2>
        <h3>Events for the selected date: {count}</h3>
      </div>
      {selectedEvent && (
        <div className="event-popup">
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default CalendarComponent;