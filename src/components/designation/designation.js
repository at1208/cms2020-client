import React from 'react';
import DesignationStyle from './style';
import Layout from '../layout/layout';
import AddDesignation from './addDesignation'
const  styling = DesignationStyle();

const Designation = () => {
   return <>
           <Layout>
               <AddDesignation />
           </Layout>
          </>
}

export default Designation;
