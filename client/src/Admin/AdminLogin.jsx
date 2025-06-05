import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

const handleChange = (e) => {
  const newFormData = {
    username: formData.username,
    password: formData.password
  };

  if (e.target.name === "username") {
    newFormData.username = e.target.value;
  } else if (e.target.name === "password") {
    newFormData.password = e.target.value;
  }

  setFormData(newFormData);
};




  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/adminlogin', formData);

      // Save token to localStorage

      localStorage.setItem('token', res.data.token); 

      setMessage('Login successful ✅');
      
      
      // Redirect to dashboard if needed
        navigate('/admindashboard');
    } catch (error) {
      setMessage('Invalid username or password ❌');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <div className="form-group">
          <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;