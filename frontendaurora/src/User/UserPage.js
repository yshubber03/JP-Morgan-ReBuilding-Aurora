import React, { useState, useEffect } from 'react'; // Added useEffect
import ProgressBar from './ProgressBar';
import EventCard from './EventCard';

const UserPage = ({ initialName }) => {
  const [name, setName] = useState('Jane'); // Set initial placeholder

  const totalTasks = 10;
  const completedTasks = 5;
  const tasksLeft = totalTasks - completedTasks; // Calculate the number of tasks left
  const goalMessage = `${tasksLeft} more and you hit your goal!`;

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

  /*
  useEffect(() => {
    // Fetching the name from database
    fetch('/path/to/your/user/database/api')
      .then(response => response.json())
      .then(data => {
        setName(data.name); // Assuming 'name' is a key in  returned data
      });
  }, []); // The empty array means this useEffect will run once when the component mounts.
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




