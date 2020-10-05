import React, { useState, useEffect } from 'react';
import DesignationStyle from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { createDesignation } from '../../actions/designation';
import { useToast } from "@chakra-ui/core";

const  styling = DesignationStyle();


const AddDesignation = ({ onClose }) => {
   const toast = useToast();
   const [designation, setDesignation] = useState({
      designationName:"",
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
   const handleDesignation = (e) => {
         e.preventDefault()
         createDesignation(designation)
          .then(response => {
            if(response.error){
              return toaster("Error!", response.error, "error")
            }
            setDesignation({...designation, designationName:""})
            return toaster("Designation created!", response.result, "success")
          })
          .catch(err => {
             return toaster("Something went wrong!", "Please try after sometime", "error")
          })
   }

   return  <div className="row justify-content-center" style={styling.outerContainer}>
             <div className="col-md-5 card" style={styling.addDesignationCard}>
                 <h1 style={styling.title}>Add Designation</h1>
                 <form onSubmit={handleDesignation}>
                     <TextField
                     variant="outlined"
                     fullWidth
                     label="Designation name"
                     value={designation.designationName}
                     onChange={(e) => setDesignation({...designation, designationName: e.target.value })}
                     />
                      <Button variant="contained" color="primary" size="large" style={styling.createBtn} fullWidth onClick={handleDesignation}>Create Designation</Button>
                 </form>
                 <Button variant="contained" color="secondary" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
              </div>
           </div>
}

export default AddDesignation;
