import React from 'react';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#4caf50', 
      color: 'white' 
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Food App
      </div>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '20px', 
        margin: 0, 
        padding: 0 
      }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="/Menue" style={{ color: 'white', textDecoration: 'none' }}>Menu</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;