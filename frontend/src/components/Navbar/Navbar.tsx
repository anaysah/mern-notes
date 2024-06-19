// src/components/Navbar.tsx
import React from 'react';
import { usePage } from '../../contexts/PageContext';

const Navbar: React.FC = () => {
  const { page, navbarItems } = usePage();

  return (
    <div className="bg-back flex justify-between p-5 py-3 items-center text-pri drop-shadow">
      <div className="text-2xl font-bold tracking-wide flex-1">Notes</div>

      {navbarItems.map((item, index) => (
        <div key={index} className="flex-1">
          {item}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
