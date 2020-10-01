import React from 'react';
import Drawer from './drawer/drawer'

const Layout = ({ children }) => {
  return <>
           <Drawer data={children} />
         </>
}

export default Layout;
