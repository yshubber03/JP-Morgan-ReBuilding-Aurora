import { AuthProvider } from './contexts/AuthContext';
import SignUp from "./signin";
import _Navbar from "./_Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from './User/UserPage';
import CalendarComponent from './Landing/calender.js'
import Gallery from './Landing/gallery'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Resources from './/resources/resources.js'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <_Navbar />
          <Routes>
            <Route exact path="/" element={<Gallery />}></Route>
            <Route exact path="/signin" element={<SignUp />}></Route>
            <Route exact path="/profile" element={<UserPage />}></Route>
            <Route exact path="/admin" element={<CalendarComponent/>}></Route>
            <Route exact path="/resources" element={<Resources />}></Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;