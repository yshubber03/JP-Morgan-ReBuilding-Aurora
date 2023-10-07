import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // import styles

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const totalTasks = 10;
  const completedTasks = 5;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="Progbar">
      <CircularProgressbar 
        value={progressPercentage} // percentage of progress
        text={`${completedTasks} out of ${totalTasks}`}
        styles={buildStyles({
          textColor: "black",
          pathColor: bgcolor || "blue", // Use the passed bgcolor prop or default to blue
          trailColor: "lightgray"
        })}
      />
    </div>
  );
};

export default ProgressBar;
