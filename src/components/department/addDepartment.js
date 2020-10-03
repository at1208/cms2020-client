import React, { useState, useEffect } from 'react';
import DepartmentStyle from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const  styling = DepartmentStyle();


const AddDepartment = ({ onClose }) => {
   const [department, setDepartment] = useState({
      departmentName:"",
   });

   return <>
           <div className="row justify-content-center">
             <div className="col-md-5 card" style={styling.addDepartmentCard}>
                 <h1 style={styling.title}>Add Department</h1>
                 <form>
                     <TextField
                     variant="outlined"
                     fullWidth
                     label="Department name"
                     value={department.departmentName}
                     onChange={(e) => setDepartment({...department, departmentName: e.target.value })}
                     />
                     <Button variant="contained" color="primary" size="large" style={styling.createBtn} fullWidth>Create Department</Button>
                 </form>
                   <Button variant="contained" color="secondary"  size="small" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
              </div>
           </div>
          </>
}

export default AddDepartment;
