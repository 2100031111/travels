import React from 'react'
import Main from './Main'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Search from './Search';

function App() {
  return (
    <Router>
    <Routes basename="ESHOPPING">

      <Route path="/" element={<Main />} />
      <Route path="/Aboutus" element={<Aboutus/>} />
      <Route path='/ContactUs' element={<Contactus/>}/>
      <Route path='/Search' element={<Search/>}/>
    </Routes>
  </Router>
  )
}

export default App
