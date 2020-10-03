import React, { useState, useEffect } from 'react';
import MemberStyle from './style';
import Layout from '../layout/layout'
import AddMember from './addMember'
import Button from '@material-ui/core/Button';


const  styling = MemberStyle();

const Member = () => {
   const [addMember, setAddMember] = useState(false);
   const handleChange = () => {
      setAddMember(true)
   }
   return <>
           <Layout>
           {!addMember && <div style={styling.addMemberContainer}>
                <Button variant="contained" style={styling.addMemBtn} onClick={handleChange}>Add Member</Button>
            </div>}
           {addMember && <AddMember onClose={(status) => setAddMember(false)}/>}
           </Layout>
          </>
}

export default Member;
