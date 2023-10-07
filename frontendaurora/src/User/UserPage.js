import React, { useState, useEffect } from 'react'; // Added useEffect
import ProgressBar from './ProgressBar';

const UserPage = ({ initialName }) => {
  const [name, setName] = useState('Jane'); // Set initial placeholder

  const totalTasks = 10;
  const completedTasks = 5;

  /*
  useEffect(() => {
    // Fetching the name from a database or an API
    fetch('/path/to/your/user/database/api')
      .then(response => response.json())
      .then(data => {
        setName(data.name); // Assuming 'name' is a key in your returned data
      });
  }, []); // The empty array means this useEffect will run once when the component mounts.
  */

  return (
    <div className="Welcome">
      <h1>Welcome, {name}!</h1>
      <div className="progressSection" style={{ width: "200px" }}>
        <ProgressBar bgcolor="green" completed={(completedTasks / totalTasks) * 100} />
      </div>
    </div>
  );
};

export default UserPage;
