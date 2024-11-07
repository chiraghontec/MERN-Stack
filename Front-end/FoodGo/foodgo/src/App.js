// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentPage from './components/PayementPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import SignupPage from './components/SignupPage';
import TodoList from './components/TodoList';
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <div>
            <Greeting name="Dhiraj" /> {/* Pass the name as a prop */}
            <Greeting name="Alice" /> {/* Another instance with a different name */}
        </div>
      <TodoList/>
      <router/>
      {/* Define Routes */}
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/Signup' element={<SignupPage/>} />
      </Routes>
    </div>
  );
}

export default App;