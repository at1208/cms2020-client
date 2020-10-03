import React, { useState, useEffect } from 'react';
import DepartmentStyle from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { createDepartment } from '../../actions/department';
import { useToast } from "@chakra-ui/core";

const  styling = DepartmentStyle();



const AddDepartment = ({ onClose }) => {
   const toast = useToast();
   const [department, setDepartment] = useState({
      departmentName:"",
   });

   const toaster = (title, description, status) => {
         return toast({
         position: "top",
         title: title,
         description: description,
         status: status,
         duration: 5000,
         isClosable: true,
         })
   }
   const handleDepartment = (e) => {
         e.preventDefault()
         createDepartment(department)
          .then(response => {
            if(response.error){
              return toaster("Error!", response.error, "error")
            }
            setDepartment({...department, departmentName:""})
            return toaster("Department created!", response.result, "success")
          })
          .catch(err => {
             return toaster("Something went wrong!", "Please try after sometime", "error")
          })
   }

   return <>
           <div className="row justify-content-center">
             <div className="col-md-5 card" style={styling.addDepartmentCard}>
                 <h1 style={styling.title}>Add Department</h1>
                 <form onSubmit={handleDepartment}>
                     <TextField
                     variant="outlined"
                     fullWidth
                     label="Department name"
                     value={department.departmentName}
                     onChange={(e) => setDepartment({...department, departmentName: e.target.value })}
                     />
                     <Button variant="contained" color="primary" size="large" style={styling.createBtn} fullWidth onClick={handleDepartment}>Create Department</Button>
                 </form>
                   <Button variant="contained" color="secondary"  size="small" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
              </div>
           </div>
          </>
}

export default AddDepartment;
