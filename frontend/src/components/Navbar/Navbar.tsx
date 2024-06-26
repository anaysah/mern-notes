// src/components/Navbar.tsx
import React from 'react';
import { usePage } from '../../contexts/PageContext';
import Searchbox from './Searchbox';
import { navbarItemsList } from '../../App';
import Menubar from './Menubar';

const Navbar: React.FC = () => {
  const { page, navbarItems } = usePage();

  return (
    // <div>
      <div className="sticky top-0 bg-back flex justify-between sm:p-5 sm:py-3 p-2 py-2 items-center text-pri drop-shadow flex-wrap gap-2">
        <div className="text-2xl font-bold tracking-wide flex-1">Notes</div>

        {/* {navbarItems.map((item, index) => (
          <div key={index} className="flex-1">
            {item}
          </div>
        ))} */}
        <div className='flex-1 order-last sm:order-none'>
          {
            navbarItems.includes(navbarItemsList.Searchbox) && <Searchbox />  
          }
        </div>
        <div className='flex-1'>
          {
            navbarItems.includes(navbarItemsList.Menubar) && <Menubar />  
          }
        </div>

      </div>
    // </div>
  );
}

export default Navbar;
