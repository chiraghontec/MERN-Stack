// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HeroText from './components/HeroText';
import FoodCard from './components/FoodCard';
import Footer from './components/Footer';
import PaymentPage from './components/PayementPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

function App() {
  return (
    <div>

      <router/>
      {/* Define Routes */}
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;