// App.js
import React from 'react';
import Navbar from './components/NavBar';
import HeroText from './components/HeroText';
import FoodCard from './components/FoodCard';
import Footer from './components/Footer';

function App() {
  const foodItems = [
    { name: 'Pizza', description: 'Cheesy and delicious', imageUrl: 'pizza3.png' },
    { name: 'Burger', description: 'Juicy and tasty', imageUrl: 'pizza3.png' },
    { name: 'Pasta', description: 'Creamy and savory', imageUrl: 'pizza3.png' },
    { name: 'Salad', description: 'Fresh and healthy', imageUrl: 'pizza3.png' },
  ];

  return (
    <div>
      <Navbar />
      <HeroText />
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
      <Footer />
    </div>
  );
}

export default App;