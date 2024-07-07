// src/Components/SplashScreen/SplashScreen.js
import React from 'react';
import './SplashScreen.css';

const SplashScreen = ({ isActive }) => {
  return (
    <div className={`splash-screen ${isActive ? 'active' : 'inactive'}`}>
      <h1>Welcome to Our App</h1>
    </div>
  );
};

export default SplashScreen;
