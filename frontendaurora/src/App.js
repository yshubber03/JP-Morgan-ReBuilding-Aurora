// import UserPage from "./User/UserPage";
// import 'font-awesome/css/font-awesome.min.css';
import Todo from './components/Todo';
import { AuthProvider } from './contexts/AuthContext';
import { EventsProvider } from './contexts/calendar_context';
import SignUp from "./signin";
import Admin from './Admin.js';
import CalendarComponent from './Landing/calender.js';
function App() {
  return (
    <AuthProvider>
      <EventsProvider>
    {/* <div className="App"> */}
        {/* <Todo /> */}
        <SignUp/>
        {/* <CalendarComponent/> */}
        {/* <UserPage /> */}
    {/* </div> */}
      </EventsProvider>
    </AuthProvider>
  );
}

export default App;