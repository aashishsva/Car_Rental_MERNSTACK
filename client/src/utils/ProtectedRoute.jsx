import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return props.children;
}

export default ProtectedRoute;
