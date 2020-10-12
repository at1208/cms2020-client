import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'

import { isAuth } from '../../actions/auth';
import { getSingleMember } from '../../actions/member';




const Message = () => {
 

  return <>
           <Layout>
               <div className="messageSideBar">

               </div>
           </Layout>
         </>
}
export default Message;
