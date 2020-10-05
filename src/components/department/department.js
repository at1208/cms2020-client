import React, { useState, useEffect } from 'react';
import DepartmentStyle from './style';
import Layout from '../layout/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useToast } from "@chakra-ui/core";
import AddDepartment from './addDepartment'
import Button from '@material-ui/core/Button';
import { getDepartments } from '../../actions/department'



const  styling = DepartmentStyle();


const Department = () => {
  const toast = useToast();
  const [addDepartment, setAddDepartment] = useState(false);
  const [departments, setDepartment] = useState();

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
    getDepartments()
      .then(response => {
        if(response.error){
          return console.log(response.error)
        }
        setDepartment(response.result)
      })
      .catch((err) => {
         return toaster("Something went wrong!", "Please try after sometime", "error")
      })
  },[])


  const handleChange = () => {
     setAddDepartment(true)
  }

  const showDepartmentTable = () => {
    const departmentList = () => {
        return departments && departments.map((item, i) => {
        return  <Tr key={i}>
                  <Td>{item.departmentName}</Td>
                </Tr>
        })
  }
    return <Table>
           <Thead>
             <Tr>
               <Th>Department</Th>
               <Th>Member</Th>
               <Th></Th>
             </Tr>
           </Thead>
           <Tbody>
            {departmentList()}
           </Tbody>
         </Table>
  }

   return <>
           <Layout>
           <div style={styling.addDepartmentContainer}>
             {!addDepartment && <Button variant="contained"  style={styling.addDepBtn} onClick={handleChange}>Add Department</Button>}
            </div>
           {addDepartment && <AddDepartment onClose={(status) => setAddDepartment(false)}/>}
           <div className="row justify-content-center">
             <div className="col-md-8 card" style={styling.departmentTableCard}>
                {showDepartmentTable()}
             </div>
           </div>
           </Layout>
          </>
}

export default Department;
