// src/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className="flex-grow flex">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
