// components/sidebar/Sidebar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={handleToggle}>
        {isCollapsed ? '☰' : '✖'}
      </button>

      {!isCollapsed && <h2 className="sidebar-title">Admin Panel</h2>}

      <ul className="sidebar-list">
        <li><Link to="/admindashboard/postcar">Post Car</Link></li>
        <li><Link to="/admindashboard/ordercar">Order Car</Link></li>
        <li><Link to="/admindashboard/locationmaster">Location Master</Link></li>
        <li><Link to="/admindashboard/categorymaster">Category Master</Link></li>
        <li><Link to="/admindashboard/vehicleowner">Vehicle Owner</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
