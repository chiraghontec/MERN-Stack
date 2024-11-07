import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f8f8f8', marginTop: '20px' }}>
      <p>© 2024 Food App. All Rights Reserved.</p>
      <p>Follow us on: 
        <a href="#" style={{ margin: '0 5px' }}>Facebook</a> | 
        <a href="#" style={{ margin: '0 5px' }}>Instagram</a> | 
        <a href="#" style={{ margin: '0 5px' }}>Twitter</a>
      </p>
    </footer>
  );
}

export default Footer;