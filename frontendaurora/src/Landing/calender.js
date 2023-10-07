import './calendar.css';

//Yasmine's code
//Worked with Meghana to integrate with Admin
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Admin from '../Admin.js';
// import {useEvent} from '../contexts/calendar_context'
import {db} from '../firebase'
import { onValue, set, ref } from 'firebase/database'

function CalendarComponent() {
  // const {EventUploader} = useEvent;
  const [date, setDate] = useState(new Date());
  const [adminData, setAdminData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const callBackAdminData = (eventsList) => {
    console.log("step2")
    setAdminData(eventsList);
    console.log(eventsList.length);
    setCount(count + 1);
  }

<<<<<<< HEAD

=======
  console.log("step4")
  useEffect(()=>{
    const query = ref(db, 'event/');
    return onValue(query, (snapshot)=>{
      const data = snapshot.val();

      console.log(data)
      console.log(snapshot.exists())
      if(snapshot.exists()){
        Object.values(data).map((event)=>{
          adminData.push(event)
          // console.log(event)
          // setAdminData((events)=>[...events, event]);
          
        })
      }
      console.log("step5")
      console.log(adminData)
    })
  }, []);
  console.log("step6")
>>>>>>> 02b8b923dbf9a04ca0bb70ec228256951fff01ae

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
    <div style = {{padding: 20}} className="app">
      <div class="row">
      <div class="column-left">
      <h1 className="header">Upcoming Volunteer Opportunities</h1>
      <div style={{padding: 20 }} className="calendar-container">
        <Calendar onChange={setDate} value={date} tileContent={customTileContent}/>
      </div>
      </div>
      <div>
      <div class="column-right">
        <Admin eventDate={date} parentCallback={callBackAdminData} data={adminData}/>
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
      </div>
    </div>
  );
}

export default CalendarComponent;