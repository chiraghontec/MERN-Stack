// HeroText.js
import React from 'react';

function HeroText() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      height: '60vh',
      backgroundColor: '#ebe6e6',
    }}>
      {/* Left Side: Text */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '10px' }}>
          Fresh & Tasty Meals Delivered
        </h1>
        <p style={{ fontSize: '18px', color: '#555' }}>
          Enjoy delicious and freshly prepared meals, delivered straight to your door. We bring the best flavors to your table.
        </p>
      </div>

      {/* Right Side: Image */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img 
          src="pizza3.png" 
          alt="Delicious Food" 
          style={{ width: '60%', height: 'auto', borderRadius: '10px' }} 
        />
      </div>
    </div>
  );
}

export default HeroText;