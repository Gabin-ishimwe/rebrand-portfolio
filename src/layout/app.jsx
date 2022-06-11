import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Home from '../view/home';
const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
