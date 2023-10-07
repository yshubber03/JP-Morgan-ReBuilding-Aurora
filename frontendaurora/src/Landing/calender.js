import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Admin from "../Admin.js";
function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [adminData, setAdminData] = useState([]);
  const [count, setCount] = useState(0);
  const callBackAdminData = (eventsList) => {
    setAdminData(eventsList);
    console.log(eventsList.length);
    setCount(count+1);
  };

  return (
    <div className="app">
      <h1 className="header">Upcoming Volunteer Opportunities</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>
        <Admin eventDate={date} parentCallback={callBackAdminData}/>
      </div>
      <div className="text-center">
        <h2>Selected date: {date.toDateString()}</h2>
        <h3>Would call the function that has the events that meg is making{" "+count}</h3>
      </div>
      
    </div>
  );
}

export default CalendarComponent;