//Yasmine's code
//Worked with Meghana to integrate with Admin
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Admin from '../Admin.js';
// import {useEvent} from '../contexts/calendar_context'
import {db} from '../firebase'
import { set, ref } from 'firebase/database'

function CalendarComponent() {
  // const {EventUploader} = useEvent;
  const [date, setDate] = useState(new Date());
  const [adminData, setAdminData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  console.log("step2")
    adminData.map((element) =>
        // function writeEventData(){
            set(ref(db, 'event/' + element.count), {
                calendarName: element.name,
                calendarDate: element.date,
                calendarTime: element.time,
                calendarSkills: element.tags
            })
            // console.log("step3")
    // }
    )
    console.log("step3")

  const callBackAdminData = (eventsList) => {
    setAdminData(eventsList);
    console.log("step1")
    // EventUploader(eventsList);
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
      <h1 className="header">Upcoming Volunteer Opportunities</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} tileContent={customTileContent}/>
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