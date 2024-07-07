// src/components/Loader.js
import React from 'react';
import '../css/Loader.css'; // Ensure this path is correct

const Loader = () => (
  <div id="page">
    <div id="container">
      <div id="ring"></div>
      <div id="ring"></div>
      <div id="ring"></div>
      <div id="ring"></div>
      <div id="loading-text"> <p> Gender_Cell_IITK </p></div>
    </div>
  </div>
);

export default Loader;
