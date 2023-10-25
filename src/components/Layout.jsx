import React from 'react';

const Layout = ({children, className}) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 px-8 lg:px-16`}>
      {children}
    </div>
  );
};

export default Layout;