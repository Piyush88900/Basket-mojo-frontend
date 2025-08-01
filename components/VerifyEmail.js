// src/components/VerifyEmail.js
import React, { useState } from 'react';

const VerifyEmail = ({ email, onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp) {
      onVerify({ email, otp });
    } else {
      alert('Enter OTP');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Verify Email</h2>
      <p>Enter the OTP sent to {email}</p>
      <input
        style={styles.input}
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button style={styles.button} onClick={handleVerify}>Verify</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: 'var(--primary-color)',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default VerifyEmail;
