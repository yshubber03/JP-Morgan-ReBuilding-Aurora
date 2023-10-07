import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import EventCard from './EventCard';
import './UserPage.css'
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const UserPage = ({ initialName }) => {
  var [name, setName] = useState(''); // Set initial placeholder
  name = localStorage.getItem('email')
  
  const totalTasks = 10;
  const completedTasks = 5;
  const tasksLeft = totalTasks - completedTasks; 
  const goalMessage = `${tasksLeft} more and you hit your goal!`;

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
    // ... add more events as needed
  ];

  useEffect(() => {
    if(localStorage.getItem('email') == ''){
      document.querySelector('.Welcome').innerHTML = `
      <div>You must be logged in to view this</div>
      `
    }
    
  })

  // Commented out Firebase logic to fetch user's name from Firestore
  /*
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("users").doc("yourUserID").get().then((doc) => {
      if (doc.exists) {
        setName(doc.data().name);
      } else {
        console.log("No such user!");
      }
    }).catch((error) => {
      console.log("Error getting user:", error);
    });

  }, []);
  */

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

      <button className="outbutton" onClick = "function(){ localStorage.setItem('email', '')}">Sign out</button>

      {/* Render the user's events */}
      <div className="userEventsSection">
        {userEvents.map(event => (
          <EventCard 
            key={event.id}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            latitude={event.latitude}  // Sample latitude for New York
            longitude={event.longitude}
            tools={event.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;





