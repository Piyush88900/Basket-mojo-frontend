// src/App.js
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import VerifyEmail from './components/VerifyEmail';
import Login from './components/Login';
import Menu from './components/Menu';
import OrderSummary from './components/OrderSummary';
import Payment from './components/Payment';

import axios from 'axios';

import './styles/theme.css';

const API_BASE = 'https://your-backend-api.com'; // Replace with your backend URL

function App() {
  const [stage, setStage] = useState('register'); // stages: register, verify, login, menu, summary, payment
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Register handler
  const handleRegister = ({ name, email, password }) => {
    setName(name);
    setEmail(email);
    setPassword(password);
    // API call to register user
    // axios.post(`${API_BASE}/register`, { name, email, password });
    // For demo, proceed directly
    setStage('verify');
  };

  // Verify email OTP
  const handleVerifyEmail = ({ email, otp }) => {
    // API call to verify OTP
    // axios.post(`${API_BASE}/verify-email`, { email, otp });
    // For demo, assume success
    alert('Email verified! Please login.');
    setEmail(email);
    setStage('login');
  };

  // Login
  const handleLogin = async ({ email, password }) => {
    // API call to login
    // const res = await axios.post(`${API_BASE}/login`, { email, password });
    // For demo, set dummy token
    // setToken(res.data.token);
    setToken('dummy_token');
    fetchMenu();
    setStage('menu');
  };

  // Fetch menu
  const fetchMenu = async () => {
    // Replace with real API call
    // const res = await axios.get(`${API_BASE}/menu`);
    // setMenuItems(res.data);
    // Dummy data:
    setMenuItems([
      { id: 1, name: 'Burger', description: 'Juicy beef burger', price: 5.99 },
      { id: 2, name: 'Pizza', description: 'Cheesy pizza', price: 8.99 },
      { id: 3, name: 'Pasta', description: 'Italian pasta', price: 7.49 },
    ]);
  };

  // Add to order
  const addToOrder = (item) => {
    const existing = orderItems.find((oi) => oi.menuId === item.id);
    if (existing) {
      existing.quantity += 1;
      setOrderItems([...orderItems]);
    } else {
      setOrderItems([...orderItems, { menuId: item.id, quantity: 1 }]);
    }
    setTotal((prev) => prev + item.price);
  };

  // Proceed to order summary
  const handleProceedToSummary = () => {
    if (orderItems.length === 0) {
      alert('Please add items to your order.');
      return;
    }
    setStage('summary');
  };

  // Place order -> Payment
  const handlePlaceOrder = () => {
    // Send order to backend
    // axios.post(`${API_BASE}/orders`, {...})
    setStage('payment');
  };

  // Handle payment
  const handlePayment = () => {
    // Call payment API or simulate success
    alert('Payment successful! Your order is on the way.');
    // Reset order
    setOrderItems([]);
    setTotal(0);
    setStage('menu');
  };

  return (
    <>
      <Header />
      {stage === 'register' && <Register onNext={handleRegister} />}
      {stage === 'verify' && <VerifyEmail email={email} onVerify={handleVerifyEmail} />}
      {stage === 'login' && <Login onLogin={handleLogin} />}
      {stage === 'menu' && (
        <>
          <Menu menuItems={menuItems} addToOrder={addToOrder} />
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <button style={styles.button} onClick={handleProceedToSummary}>Review Order</button>
          </div>
        </>
      )}
      {stage === 'summary' && (
        <OrderSummary
          orderItems={orderItems}
          menuItems={menuItems}
          total={total}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
      {stage === 'payment' && (
        <Payment onPay={handlePayment} />
      )}
      <Footer />
    </>
  );
}

const styles = {
  button: {
    padding: '12px 24px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default App;
