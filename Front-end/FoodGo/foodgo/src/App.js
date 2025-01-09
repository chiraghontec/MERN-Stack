import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HeroText from './components/HeroText';
import FoodCard from './components/FoodCard';
import Footer from './components/Footer';
import PaymentPage from './components/PayementPage';
import Menu from './components/Menu'; 
import About from './components/About'; 

function App() {
  const foodItems = [
    { name: 'Pizza', description: 'Cheesy and delicious', imageUrl: 'pizza.png' },
    { name:'Sandwitch', description: 'Delicious and Crispy', imageUrl: 'Sandwitch.png'},
    { name: 'Burger', description: 'Juicy and tasty', imageUrl: 'burger.jpeg' },
    { name: 'Pasta', description: 'Creamy and savory', imageUrl: 'pasta.png' },
    { name: 'Salad', description: 'Fresh and healthy', imageUrl: 'salad.jpg' },
  ];

  return (
    <div>
      <Navbar />
      <HeroText />
      
      {/* Define Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
              {foodItems.map((item, index) => (
                <FoodCard 
                  key={index} 
                  name={item.name} 
                  description={item.description} 
                  imageUrl={item.imageUrl} 
                />
              ))}
            </div>
          } 
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;