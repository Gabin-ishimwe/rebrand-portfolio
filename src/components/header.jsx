import React from 'react';
import './app.scss';
import { Button } from '@mui/material';
import theme from '../theme/theme';

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to my portfolio</h1>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  );
};

export default Header;
