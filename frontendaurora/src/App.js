// import './App.css';
import Todo from './components/Todo';
import { AuthProvider } from './contexts/AuthContext';
import { EventsProvider } from './contexts/calendar_context';
import SignUp from "./signin";
import Admin from './Admin.js';
import CalendarComponent from './Landing/calender.js';
import User from './User.js';
function App() {
  return (
    <AuthProvider>
      <EventsProvider>
    {/* <div className="App"> */}
      {/* <Todo /> */}
      {/* <SignUp/> */}
        {/* <CalendarComponent/> */}
    {/* </div> */}
    <User/>
      </EventsProvider>
    </AuthProvider>
  );
}

export default App;