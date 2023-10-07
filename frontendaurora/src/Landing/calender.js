//Yasmine's code
//Worked with Meghana to integrate with Admin
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Admin from '../Admin.js';
import './CalendarComponent.css';
import useWindowDimensions from '../hooks/screenDimensions'; 

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [adminData, setAdminData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { height, width } = useWindowDimensions();

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
    const applicableEvents = [];
    const eventsForDate = adminData.map((event) => {
        const eventDate = new Date(event.date);
        if (eventDate.getDate() == dateToRender.getDate()) {
            applicableEvents.push(event);
        }

    });

    return (
        <>
        {applicableEvents.map((m,index) => (
            <li key={index}>{m.name+" "+m.date}</li>
        ))}
        </>
    );
  };

  const customTileContent = ({date, view}) => {
    if(view==='month') {
        const eventContent = renderEventsForDate(date);
        return eventContent;
    }
    return null;
  };



  return (
    <div className="app">
      <h1 className="header">HEATHER ILY!!</h1>
      <div className="two-column-container">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} tileContent={customTileContent} />
        </div>
        <div>
          <Admin eventDate={date} parentCallback={callBackAdminData} />
        </div>
        {/* <div className="text-center">
          <h2>Selected date: {date.toDateString()}</h2>
          <h3>Events for the selected date: {count}</h3>
        </div> */}
        {selectedEvent && (
          <div className="event-popup">
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.description}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalendarComponent;