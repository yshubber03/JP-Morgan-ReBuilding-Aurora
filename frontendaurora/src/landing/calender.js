import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <h1 className="header">Upcoming Volunteer Opportunities</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        <h2>Selected date: {date.toDateString()}</h2>
        <h3>Would call the function that has the events that meg is making</h3>
      </div>
    </div>
  );
}

export default CalendarComponent;