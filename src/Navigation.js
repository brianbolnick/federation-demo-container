import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
  background: '#264653',
  height: '80px',
  width: '100%',
  padding: '16px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center'
};

const linkStyles = {
  color: '#e9c46a',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  marginRight: '16px',
  cursor: 'pointer'
};

const Navigation = () => (
  <div style={containerStyle}>
    <Link style={linkStyles} to="/">
      Home
    </Link>
    <Link style={linkStyles} to="/about">
      About
    </Link>
  </div>
);

export default Navigation;
