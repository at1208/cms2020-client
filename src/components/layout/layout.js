import React from 'react';
import DeskDrawer from './drawer/deskdrawer';
import MobDrawer from './drawer/mobdrawer'


const Layout = ({ children }) => {
  return <>
           <div className='d-none d-sm-block d-sm-none d-md-block'>
             <DeskDrawer data={children} />
           </div>
           <div className='d-block d-sm-none'>
             <MobDrawer data={children} />
           </div>
         </>
}

export default Layout;
