// import './App.css';
import Todo from './components/Todo';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from "./signin";
///
function App() {
  return (
    <AuthProvider>
    {/* <div className="App"> */}
      {/* <Todo /> */}
      <SignUp />
    {/* </div> */}
    </AuthProvider>
  );
}

export default App;