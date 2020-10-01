import React from 'react';
import DepartmentStyle from './style';
import Layout from '../layout/layout';
import AddDepartment from './addDepartment'
const  styling = DepartmentStyle();

const Department = () => {
   return <>
           <Layout>
               <AddDepartment />
           </Layout>
          </>
}

export default Department;
