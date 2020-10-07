import React, { useState, useEffect } from 'react';
import MemberStyle from './style';
import Layout from '../layout/layout'
import AddMember from './addMember'
import Button from '@material-ui/core/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { getMembers } from '../../actions/member';

const  styling = MemberStyle();

const Member = () => {
   const [addMember, setAddMember] = useState(false);
   const [members, setMember] = useState();

   const handleChange = () => {
      setAddMember(true)
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
           // console.log(item)
         return  <Tr key={i}>
                   <Td>{item.fullName}</Td>
                   <Td>{item.email}</Td>
                   <Td>{item.contactNumber}</Td>
                   <Td><Chip avatar={<Avatar>BB</Avatar>}  label={item.department.departmentName}/></Td>
                   <Td><Chip color="primary" label={item.designation.designationName}/></Td>
                 </Tr>
         })
   }
     return <Table>
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
   }


   return <>
           <Layout>
           {<div style={styling.addMemberContainer}>
              {!addMember && <Button variant="contained" style={styling.addMemBtn} onClick={handleChange}>Add Member</Button>}
            </div>}
           {addMember && <AddMember onClose={(status) => setAddMember(false)}/>}

           <div className="row justify-content-center">
             <div className="col-md-8 card" style={styling.memberTableCard}>
                {showMemberTable()}
             </div>
           </div>
           </Layout>
          </>
}

export default Member;
