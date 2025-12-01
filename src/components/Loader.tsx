import React from 'react';
import '../css/Loader.css';
import logo from '../assets/images/logo-gc.png';

const Loader: React.FC = () => (
    <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="loading-text"><img src={logo} alt="profile" /></div>
        </div>
    </div>
);

export default Loader;
