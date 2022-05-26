/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Wrapper from './components/contentWrapper/Main';
import Login from './components/Login/Main';
// import Register from './components/register/Main';
import Auth from './auth/Auth';
import Register from './components/Register/Main';
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user, redirectPath = '/login', children }) => {
  if (!Auth.isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const Private = () => {
  const auth = Auth.isAuthenticated();
  return auth ? <Wrapper /> : <Navigate to="/login" />;
};

const Router = () => (
  <Routes>
    <Route
      exact
      path="/login"
      element={Auth.isAuthenticated() ? <Wrapper /> : <Login />}
    />
    <Route exact path="/register" element={<Register />} />
    <Route path="/" element={<Private />} />
  </Routes>
);

export default Router;
