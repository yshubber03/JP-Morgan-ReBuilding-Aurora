// import './App.css';
import Todo from './components/Todo';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from "./signin";
import Admin from './Admin.js';
import CalendarComponent from './Landing/calender.js';
function App() {
  return (
    <AuthProvider>
    {/* <div className="App"> */}
      {/* <Todo /> */}
      <SignUp/>
      <CalendarComponent/>
    {/* </div> */}
    </AuthProvider>
  );
}

export default App;