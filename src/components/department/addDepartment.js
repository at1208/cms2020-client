import React, { useState, useEffect } from 'react';
import DepartmentStyle from './style';
import TextField from '@material-ui/core/TextField';
const  styling = DepartmentStyle();


const AddDepartment = () => {
   const [department, setDepartment] = useState({
      departmentName:"",
   });

   return <>
           <div className="row justify-content-center">
             <div className="col-md-6 card" style={styling.addDepartmentCard}>
                 <form>
                     <TextField
                     variant="outlined"
                     fullWidth
                     label="Department name"
                     value={department.departmentName}
                     onChange={(e) => setDepartment({...department, departmentName: e.target.value })}
                     />
                 </form>
              </div>
           </div>
          </>
}

export default AddDepartment;
