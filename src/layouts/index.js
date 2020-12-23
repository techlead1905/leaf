import React from 'react';
import Home from '../components/home';
import Sidebar from '../components/sidebar';
import './layout.scss';

const Layout = () => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <Home />
    </div>
  );
};

export default Layout;
