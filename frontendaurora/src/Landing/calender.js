import './calendar.css';

//Yasmine's code
//Worked with Meghana to integrate with Admin
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Admin from '../Admin.js';
// import {useEvent} from '../contexts/calendar_context'
import './CalendarComponent.css';
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
    adminData.map((element) =>
        // function writeEventData(){
            set(ref(db, 'event/' + element.count), {
                calendarCount: element.count,
                calendarName: element.name,
                calendarDate: element.date,
                calendarTime: element.time,
                calendarSkills: element.tags,
                calendarVolun: element.volunteers
            })
            // console.log("step3")
    // }
    );
    console.log("step3")
  }

  console.log("step4")
  useEffect(()=>{
    const query = ref(db, 'event/');
    return onValue(query, (snapshot)=>{
      const data = snapshot.val();

      console.log(data)
      console.log(snapshot.exists())
      if(snapshot.exists()){
        Object.values(data).map((event)=>{
          adminData.push({
            count: event.calendarCount,
            name: event.calendarName,
            date: event.calendarDate,
            time: event.calendarTime,
            tags: event.calendarSkills,
            volunteers: event.calendarVolun
          })
          // console.log(event)
          // setAdminData((events)=>[...events, event]);
          
        })
      }
      console.log("step5")
      console.log(adminData)
    })
  }, []);
  console.log("step6")

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
        if (eventDate.getDate() === dateToRender.getDate()) {
            applicableEvents.push(event);
        }

    });

    return (
        <>
        {applicableEvents.map((m,index) => (
            <li key={index}>{m.title}</li>
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
    <div style = {{padding: 10}} className="app">
      <div className="two-column-container">
        <div>
          <h1 className="header">Upcoming Volunteer Opportunities</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} tileContent={customTileContent}/>
          </div>
        </div>
          <div style = {{padding: 100}}>
            <Admin eventDate={date} parentCallback={callBackAdminData} data={adminData}/>
          </div>
        </div>
      <div>
     {/*  <div className="text-center">
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