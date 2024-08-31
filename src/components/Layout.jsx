// src/components/Layout.js
import React from 'react';
import AppBar from './AppBar'; // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main style={{ paddingTop: '64px' }}> {/* Adjust padding based on AppBar height */}
        {children}
      </main>
    </>
  );
};

export default Layout;
