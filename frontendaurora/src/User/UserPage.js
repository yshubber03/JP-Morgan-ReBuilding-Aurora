import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import EventCard from './EventCard';
// If you're going to use Firebase, make sure to import the necessary Firebase modules:
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const UserPage = ({ initialName }) => {
  const [name, setName] = useState('Jane'); // Set initial placeholder

  const totalTasks = 10;
  const completedTasks = 5;
  const tasksLeft = totalTasks - completedTasks; 
  const goalMessage = `${tasksLeft} more and you hit your goal!`;

  // Hardcoded events
  const userEvents = [
    {
      id: 1,
      description: "Event 1",
      date: "2023-11-01",
      time: "15:00",
      location: "Location 1",
      tools: ["Tool A", "Tool B"]
    },
    {
      id: 2,
      description: "Event 2",
      date: "2023-11-02",
      time: "16:00",
      location: "Location 2",
      tools: ["Tool C"]
    }
    // ... add more events as needed
  ];

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
    <div className="Welcome">
      <h1>Welcome, {name}!</h1>

      <div className="progressSection">
        <div style={{ width: "200px" }}>
          <ProgressBar bgcolor="green" completed={(completedTasks / totalTasks) * 100} />
        </div>
        <div className="goalMessage">
          <span className="goalNumber">{tasksLeft}</span>
          <div>more and you've <br/> hit your goal</div>
        </div>
      </div>

      {/* Render the user's events */}
      <div className="userEventsSection">
        {userEvents.map(event => (
          <EventCard 
            key={event.id}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            tools={event.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;





