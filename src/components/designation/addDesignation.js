import React, { useState, useEffect } from 'react';
import DesignationStyle from './style';
import TextField from '@material-ui/core/TextField';
const  styling = DesignationStyle();


const AddDesignation = () => {
   const [designation, setDesignation] = useState({
      designationName:"",
   });

   return <>
           <div className="row justify-content-center">
             <div className="col-md-6 card" style={styling.addDesignationCard}>
                 <form>
                     <TextField
                     variant="outlined"
                     fullWidth
                     label="Designation name"
                     value={designation.designationName}
                     onChange={(e) => setDesignation({...designation, designationName: e.target.value })}
                     />
                 </form>
              </div>
           </div>
          </>
}

export default AddDesignation;
