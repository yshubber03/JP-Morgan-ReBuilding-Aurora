// import './App.css';
import Todo from './components/Todo';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from "./signin";
///

//name: a
//email: a@a.aa
//password: aaaaaa
function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}

export default App;