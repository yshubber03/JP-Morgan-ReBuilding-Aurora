import React, { useState } from 'react';

const UserPage = ({ initialName }) => {
  // Initialize state with the name passed from the user's profile.
  const [name, setName] = useState(initialName);

  // Handler to update name state when the input value changes.
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      
    </div>
  );
};

export default UserPage;



