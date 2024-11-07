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
  const Title = (props) =>  {return <h1>{props.title}</h1>;}
  const Person = (props) => {return <p>{props.name} is {props.age} years old.</p>; }
  const Child = (props) => (
      <button onClick={props.sayHello}>Click me</button>
  );
  const Welcome = (props) => (
    <p>{props.isLoggedIn ? "Welcome back!" : "Please log in"}</p>
  );
  const ItemList = (props) => (
    <ul>
    {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
  return (
    <div>
      <div>
            <Greeting name="Dhiraj" /> {/* Pass the name as a prop */}
            <Greeting name="Alice" /> 
            <Title name ='Chirag' />
           <Person name ='Chirag' age='20'/>
           {/*<Child sayHello={['Chirag', 'Chayashree','Gowtham']}/>
           <Welcome/>
           <ItemList/>*/}
        </div>
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