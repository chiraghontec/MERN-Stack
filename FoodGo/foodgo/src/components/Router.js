import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function router() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/Menue'>Menu</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/Menu' element={<Menu/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function Menu(){
    return <h2>Menue Page</h2>
}

function About() {
  return <h2>About Page</h2>;
}

export default router;
