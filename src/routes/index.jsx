import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../view/home';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';

const AllRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AllRoutes;
