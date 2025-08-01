// src/components/OrderSummary.js
import React from 'react';

const OrderSummary = ({ orderItems, menuItems, total, onPlaceOrder }) => (
  <div style={{ maxWidth: '700px', margin: '20px auto', padding: '20px' }}>
    <h2 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Order Summary</h2>
    {orderItems.length === 0 ? (
      <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
    ) : (
      <>
        <ul>
          {orderItems.map((item, index) => {
            const menuItem = menuItems.find(m => m.id === item.menuId);
            return (
              <li key={index} style={{ marginBottom: '10px' }}>
                {menuItem?.name} x {item.quantity} - ${menuItem?.price * item.quantity}
              </li>
            );
          })}
        </ul>
        <h3 style={{ textAlign: 'right' }}>Total: ${total.toFixed(2)}</h3>
        <button style={styles.button} onClick={onPlaceOrder}>Proceed to Payment</button>
      </>
    )}
  </div>
);

const styles = {
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  }
};

export default OrderSummary;
