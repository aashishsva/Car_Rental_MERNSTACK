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
        <li>
          <Link to="/admindashboard/postcar">
            <span className="icon">🚗</span>
            {!isCollapsed && <span className="label">Post Car</span>}
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/ordercar">
            <span className="icon">📦</span>
            {!isCollapsed && <span className="label">Order Car</span>}
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/locationmaster">
            <span className="icon">📍</span>
            {!isCollapsed && <span className="label">Location Master</span>}
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/categorymaster">
            <span className="icon">🗂️</span>
            {!isCollapsed && <span className="label">Category Master</span>}
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/vehicleowner">
            <span className="icon">👤</span>
            {!isCollapsed && <span className="label">Vehicle Owner</span>}
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-btn">
            <span className="icon">🔓</span>
            {!isCollapsed && <span className="label">Logout</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
