import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../view/home';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import Layout from '../layout/app';

const AllRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AllRoutes;
