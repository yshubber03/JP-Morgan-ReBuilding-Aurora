// import UserPage from "./User/UserPage";
// import 'font-awesome/css/font-awesome.min.css';
import Todo from './components/Todo';
import { AuthProvider } from './contexts/AuthContext';
import { EventsProvider } from './contexts/calendar_context';
import SignUp from "./signin";
import _Navbar from "./_Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import UserPage from './User/UserPage';
import Footer from './Footer';
import {useAuth} from './contexts/AuthContext'
import Gallery from './Landing/gallery'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


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
            <Route exact path="/4" element={<div>hello 4</div>}></Route>
            <Route exact path="/5" element={<div>hello 5</div>}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;