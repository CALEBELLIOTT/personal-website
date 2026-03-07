import React from 'react';
import Terminal80s from './Terminal80s';
import './styles80s.css';

const Layout80s = () => {
  return (
    <div className="terminal-page">
      <div className="scanlines"></div>
      <div className="terminal-container">
        <Terminal80s />
      </div>
    </div>
  );
};

export default Layout80s;
