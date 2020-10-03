import React, { useState, useEffect } from 'react';
import DesignationStyle from './style';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Layout from '../layout/layout';
import { useToast } from "@chakra-ui/core";
import AddDesignation from './addDesignation';
import Button from '@material-ui/core/Button';
import { getDesignations } from '../../actions/designation'
const  styling = DesignationStyle();




const Designation = () => {
  const toast = useToast();
  const [addDesignation, setAddDesignation] = useState(false);
  const [designations, setDesignation] = useState();

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

  useEffect(() => {
    getDesignations()
      .then(response => {
        if(response.error){
          return console.log(response.error)
        }
        setDesignation(response.result)
      })
      .catch((err) => {
         return toaster("Something went wrong!", "Please try after sometime", "error")
      })
  },[])


  const handleChange = () => {
     setAddDesignation(true)
  }



const showDesignationTable = () => {
  const designationList = () => {
      return designations && designations.map((item, i) => {
      return  <Tr key={i}>
                <Td>{item.designationName}</Td>
              </Tr>
      })
}
  return <Table>
         <Thead>
           <Tr>
             <Th>Designation</Th>
             <Th>Member</Th>
             <Th></Th>
           </Tr>
         </Thead>
         <Tbody>
          {designationList()}
         </Tbody>
       </Table>
}

   return <>
             <Layout>
              {!addDesignation && <div style={styling.addDesignationContainer}>
              <Button variant="contained" style={styling.addDesBtn} onClick={handleChange}>Add Designation</Button>
              </div>}
              {addDesignation && <AddDesignation onClose={(status) => setAddDesignation(false)} />}
                <div className="row justify-content-center">
                 <div className="col-md-8 card" style={styling.designationTableCard}>
                    {showDesignationTable()}
                 </div>
               </div>
             </Layout>
          </>
}

export default Designation;
