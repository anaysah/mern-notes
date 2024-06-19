// src/contexts/PageContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

type PageContextType = {
  page: string;
  navbarItems: JSX.Element[];
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};

type PageProviderProps = {
  children: ReactNode;
  page: string;
  navbarItems: JSX.Element[];
};

export const PageProvider: React.FC<PageProviderProps> = ({ children, page, navbarItems }) => {
  return (
    <PageContext.Provider value={{ page, navbarItems }}>
      {children}
    </PageContext.Provider>
  );
};
