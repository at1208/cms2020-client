import React, { useState, useEffect } from 'react';
import MemberStyle from './style';
import Layout from '../layout/layout'
import AddEmployee from './addEmployee'
import Button from '@material-ui/core/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { getMembers } from '../../actions/member';
import Fade from 'react-reveal/Fade';


const  styling = MemberStyle();

const Employee = () => {
   const [members, setMember] = useState();
   const [open, setOpen] = useState(false);

   const handleChange = () => {
      setOpen(true)
   }
   useEffect(() => {
      getMembers()
        .then(response => {
          if(response.error){
            // console.log(response)
          }
         setMember(response.result)
        })
        .catch((err) => {
          console.log(err)
        })
   },[])


const showMemberTable = () => {
 const memberList = () => {
     return members && members.map((item, i) => {
     return  <Tr key={i}>
               <Td>{item.fullName}</Td>
               <Td>{item.email}</Td>
               <Td>{item.contactNumber}</Td>
               <Td><Chip avatar={<Avatar>BB</Avatar>}  label={item.department.departmentName}/></Td>
               <Td><Chip color="primary" label={item.designation.designationName}/></Td>
             </Tr>
     })
}
 return <div style={styling.empContainer}>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Department</Th>
                <Th>Designation</Th>
              </Tr>
            </Thead>
            <Tbody>
             {memberList()}
            </Tbody>
          </Table>
       </div>
}

const employeeHeader = () => {
  return <div className="row col" style={styling.empHeader}>
            <div className="col-md-8">
              <span style={styling.title}>Employee</span>
            </div>
            <div className="col-md-4">
               <div className="row justify-content-end">
                 <Button variant="contained" style={styling.addEmp} onClick={handleChange}>
                   <i className="la la-plus" style={styling.plusIcon}/>
                   Add Employee
                 </Button>
               </div>
            </div>
         </div>
}


const searchEmp = () => {
   return <div className="row col">
             <div className="col-md-4">
              <TextField
                style={styling.field}
                variant="outlined"
                label="Product Name"
                fullWidth
              />
             </div>
             <div className="col-md-4">
             <TextField
               fullWidth
               style={styling.field}
               variant="outlined"
               label="Employee Name"
             />
             </div>
             <div className="col-md-4 pt-2">
              <Button variant="contained" style={styling.field} fullWidth style={styling.searchbtn}>
                Search
              </Button>
             </div>
          </div>
}


   return <>
           <Layout>
               <div  className="">
                   {open && <Fade  top><AddEmployee onClose={() => setOpen(false)}/></Fade>}
                   {!open && <div>
                     <div>
                       {employeeHeader()}
                     </div>
                     <div>
                     {searchEmp()}
                     </div>
                     <div>
                     {showMemberTable()}
                     </div>
                   </div>}
               </div>
           </Layout>
          </>
}

export default Employee;
