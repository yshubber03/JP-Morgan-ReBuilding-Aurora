import _Navbar from "./_Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
        <_Navbar />
          <Routes>
            <Route exact path="/" element={<div>hello home</div>}></Route>
            <Route exact path="/2" element={<div>hello 2</div>}></Route>
            <Route exact path="/3" element={<div>hello 3</div>}></Route>
            <Route exact path="/4" element={<div>hello 4</div>}></Route>
            <Route exact path="/5" element={<div>hello 5</div>}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>}
      

    </div>
  );
}

export default App;
