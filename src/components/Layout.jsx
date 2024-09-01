import React from 'react';
import AppBar from './AppBar'; 

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main style={{ paddingTop: '64px' }}> 
        {children}
      </main>
    </>
  );
};

export default Layout;
