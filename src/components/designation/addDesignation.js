import React, { useState, useEffect } from 'react';
import DesignationStyle from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const  styling = DesignationStyle();


const AddDesignation = ({ onClose }) => {
   const [designation, setDesignation] = useState({
      designationName:"",
   });

   return <>
           <div className="row justify-content-center">
             <div className="col-md-5 card" style={styling.addDesignationCard}>
                 <h1 style={styling.title}>Add Designation</h1>
                 <form>
                     <TextField
                     variant="outlined"
                     fullWidth
                     label="Designation name"
                     value={designation.designationName}
                     onChange={(e) => setDesignation({...designation, designationName: e.target.value })}
                     />
                      <Button variant="contained" color="primary" size="large" style={styling.createBtn} fullWidth>Create Designation</Button>
                 </form>
                 <Button variant="contained" color="secondary" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
              </div>
           </div>
          </>
}

export default AddDesignation;
