import React from 'react';
import Drawer from './drawer/drawer'
import DeskDrawer from './drawer/deskdrawer'

const Layout = ({ children }) => {
  return <>
           <DeskDrawer data={children} />
         </>
}

export default Layout;
