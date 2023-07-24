import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about'
import Home from './pages/home';
import Dept from './pages/dept';
import Contact from './pages/contact';
import Structure from '../src/images/structure.jpg';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dept' element={<Dept />} />
      </Routes>
      <img src={Structure} alt=""/>
    </Router>
  );
}

export default App;