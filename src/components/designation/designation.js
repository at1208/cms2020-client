import React, { useState, useEffect } from 'react';
import DesignationStyle from './style';
import Layout from '../layout/layout';
import AddDesignation from './addDesignation';
import Button from '@material-ui/core/Button';
const  styling = DesignationStyle();

const Designation = () => {
  const [addDesignation, setAddDesignation] = useState(false);
  const handleChange = () => {
     setAddDesignation(true)
  }
   return <>
           <Layout>
           {!addDesignation && <div style={styling.addDesignationContainer}>
                <Button variant="contained" color="primary" onClick={handleChange}>Add Designation</Button>
            </div>}
               {addDesignation && <AddDesignation onClose={(status) => setAddDesignation(false)} />}
           </Layout>
          </>
}

export default Designation;
