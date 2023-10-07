import React, { useState } from 'react';
//import './UserPage.css'; // Importing the styles for the UserPage

const UserPage = ({ initialName }) => {
  // State for the user's name
  const [name, setName] = useState(initialName);

  // Define total and completed tasks, which will need to come from the DB. These are test values for now
  const totalTasks = 10;
  const completedTasks = 5;

  // Calculate the percentage of tasks completed to display in the progress bar
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="Welcome">
      <h1>Welcome, {name}!</h1>

      {/* Display the progress bar */}
      <div className="progressBar">
        {/* Display the text indicating number of tasks completed */}
        <div className="progressBarText">
          You have completed {completedTasks}/{totalTasks} tasks!
        </div>
        
        {/* Container for the visual progress bar */}
        <div className="progressBarContainer">
          {/* Filled section of the progress bar */}
          <div 
            className="progressBarFill" 
            style={{ width: `${progressPercentage}%` }} // Adjust the width based on the progress percentage
          ></div>
        </div>
      </div>

      <h2>Your Hours Logged!</h2>
    </div>
  );
};

export default UserPage;