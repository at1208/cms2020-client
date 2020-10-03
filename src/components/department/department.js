import React, { useState, useEffect } from 'react';
import DepartmentStyle from './style';
import Layout from '../layout/layout';
import AddDepartment from './addDepartment'
import Button from '@material-ui/core/Button';

const  styling = DepartmentStyle();


const Department = () => {
  const [addDepartment, setAddDepartment] = useState(false);
  const handleChange = () => {
     setAddDepartment(true)
  }

   return <>
           <Layout>
           {!addDepartment && <div style={styling.addDepartmentContainer}>
                <Button variant="contained"  style={styling.addDepBtn} onClick={handleChange}>Add Department</Button>
            </div>}
           {addDepartment && <AddDepartment onClose={(status) => setAddDepartment(false)}/>}
           </Layout>
          </>
}

export default Department;
