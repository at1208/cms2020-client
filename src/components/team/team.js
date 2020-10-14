import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import Button from '@material-ui/core/Button';
import GroupStyle from './style';
import CreateTeam from './createTeam';
import { Link } from 'react-router-dom';

const  styling = GroupStyle();



const Group = () => {
  const [createGroup, setCreateGroup] = useState(true);

  const handleChange = () => {
    setCreateGroup(true)
  }

  return <>
           <Layout>
              <div style={styling.createGroupContainer}>
                {!createGroup && <Button variant="contained" style={styling.createGrpBtn} onClick={handleChange}>Create Group</Button>}
              </div>
              {createGroup && <CreateTeam onClose={(status) => setCreateGroup(false)}/>}


           </Layout>
         </>
}
export default Group;
