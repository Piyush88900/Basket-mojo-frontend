// src/components/Header.js
import React from 'react';

const Header = () => (
  <header style={{
    backgroundColor: 'var(--primary-color)',
    color: 'var(--secondary-color)',
    padding: '15px',
    textAlign: 'center'
  }}>
    <h1 style={{ margin: 0 }}>Basket Mojo</h1>
  </header>
);

export default Header;
