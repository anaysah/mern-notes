// src/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-back'>
      <Navbar />
      <main className="container mx-auto flex-grow flex text-sec">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
