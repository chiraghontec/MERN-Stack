import React from 'react'
import Navbar from './NavBar'
import HeroText from './HeroText'
import Footer from './Footer'
import FoodCard from './FoodCard'

const Home = () => {
    const foodItems = [
        { name: 'Pizza', description: 'Cheesy and delicious', imageUrl: 'pizza.png' },
        { name: 'Burger', description: 'Juicy and tasty', imageUrl: 'pizza.png' },
        { name: 'Pasta', description: 'Creamy and savory', imageUrl: 'pizza.png' },
        { name: 'Salad', description: 'Fresh and healthy', imageUrl: 'pizza.png' },
      ];
  return (
    <>
    <Navbar/>
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
    <Footer/>
    </>
  )
}

export default Home