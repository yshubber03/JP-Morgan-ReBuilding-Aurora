import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import EventCard from './EventCard';
import _Navbar from './_Navbar';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const UserPage = ({ initialName }) => {
  const [name, setName] = useState('Jane'); // Set initial placeholder

  const totalTasks = 10;
  const completedTasks = 5;
  const tasksLeft = totalTasks - completedTasks; 


  // Hardcoded events for now
  const userEvents = [
    {
      id: 1,
      description: "Exterior Paint",
      date: "2023-11-01",
      time: "15:00",
      location: "Aurora, IL",
      latitude: "41.7606",
      longitude: "-88.3201",
      tools: ["Rollers, Brushes, Trays"]
    },
    {
      id: 2,
      description: "Gutter Cleaning",
      date: "2023-11-04",
      time: "16:00",
      location: "Aurora, IL",
      latitude: "41.8781",
      longitude: "-87.6298",
      tools: ["Ladder, Gloves, Trash Bags"]
    }
  ];


  // Commented out Firebase logic to fetch events from Firestore
  /*
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("events").get().then((querySnapshot) => {
      const eventsData = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setEvents(eventsData);
    });

  }, []);
  */

  return (
    <div>
      <_Navbar />
        <div className="Welcome text-center">
        <h1>Welcome, {name}!</h1>
        <hr></hr>

        <div className="progressSection container">

        {/* Row for ProgressBar */}
        <div className="row">
          <div className="col-md-12" style={{ width: "200px" }}>
            <ProgressBar bgcolor="green" completed={(completedTasks / totalTasks) * 100} />
          </div>
        </div>

        {/* Row for goalMessage */}
        <div className="row">
          <div className="col-md-12 goalMessage">
            <span className="goalNumber">{tasksLeft}</span>
            <div>more and you've hit your goal</div>
          </div>
        </div>

      </div>


      {/* Render the users events */}
      <div className="userEventsSection">
        {userEvents.map(event => (
          <EventCard 
            key={event.id}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            latitude={event.latitude}  
            longitude={event.longitude}
            tools={event.tools}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default UserPage;





