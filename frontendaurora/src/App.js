// import UserPage from "./User/UserPage";
// import 'font-awesome/css/font-awesome.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { EventsProvider } from './contexts/calendar_context';
import SignUp from "./signin";
import _Navbar from "./_Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import UserPage from './User/UserPage';
//import Footer from './Footer';
import {useAuth} from './contexts/AuthContext'
import CalendarComponent from './landing/calender.js'
import Gallery from './landing/gallery'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Resources from './/resources/resources.js'


///

//name: a
//email: a@a.aa
//password: aaaaaa
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