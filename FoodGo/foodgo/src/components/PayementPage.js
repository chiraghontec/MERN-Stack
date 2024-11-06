import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();

  const handleOrderPlaced = () => {
    alert('Order placed successfully!');
    navigate('/'); // Redirect to homepage
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      color: '#333',
      textAlign: 'center',
    }}>
      <h1>Payment Page</h1>
      <p>This is a dummy payment page for your order.</p>
      
      <div style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'left',
      }}>
        <h3>Order Summary</h3>
        <p>Item: Delicious Food</p>
        <p>Price: $10.00</p>
        
        <button style={{
          padding: '10px 15px',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '15px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4caf50'}
        onClick={handleOrderPlaced}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;