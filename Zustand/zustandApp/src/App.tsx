import { useState } from 'react'
import { UserProfile } from "./UserProfile/UserProfile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
;


import './App.css'

function App() {

  const name="tim";
  const age=28;

  return (
    // <p>
    //   <UserProfile name={name} age={age}/>
    // </p>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> 
    </Router>
    
  )
}

export default App
