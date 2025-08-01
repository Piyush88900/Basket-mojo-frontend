// src/components/Payment.js
import React from 'react';

const Payment = ({ onPay }) => (
  <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', textAlign: 'center', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
    <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Payment</h2>
    <p>Click below to simulate payment</p>
    <button style={styles.button} onClick={onPay}>Pay Now</button>
  </div>
);

const styles = {
  button: {
    padding: '12px 24px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default Payment;
