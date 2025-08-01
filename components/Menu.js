// src/components/Menu.js
import React from 'react';

const Menu = ({ menuItems, addToOrder }) => (
  <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px' }}>
    <h2 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Menu</h2>
    {menuItems.length === 0 ? (
      <p style={{ textAlign: 'center' }}>Loading menu...</p>
    ) : (
      menuItems.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ccc'
        }}>
          <div>
            <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>{item.description}</p>
            <p style={{ margin: 0, fontWeight: 'bold' }}>${item.price}</p>
          </div>
          <button style={styles.button} onClick={() => addToOrder(item)}>Add</button>
        </div>
      ))
    )}
  </div>
);

const styles = {
  button: {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Menu;
