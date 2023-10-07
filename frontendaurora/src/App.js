import React from 'react';
import UserPage from './User/UserPage'; // Import UserPage component
import 'font-awesome/css/font-awesome.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { EventsProvider } from './contexts/calendar_context';
import SignUp from './signin';
import Admin from './Admin'; // Import Admin component
import CalendarComponent from './Landing/calender'; // Import CalendarComponent component

function App() {
  return (
    <AuthProvider>
      <EventsProvider>
        {/* You can include your components here */}
        {/* <SignUp /> */}
        {/* <CalendarComponent /> */}
        <UserPage />
        {/* <Admin /> */}
      </EventsProvider>
    </AuthProvider>
  );
}

export default App;