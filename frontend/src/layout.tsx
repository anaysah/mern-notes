// src/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
