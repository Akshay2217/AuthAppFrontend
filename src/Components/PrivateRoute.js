import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {

  const state = useSelector((state) => state.Auth.isAuthenticated);
  console.log("isAuthenticated",state );

  return state ? children : <Navigate to="/login" />;
};

export default PrivateRoute;