import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import Button from '@material-ui/core/Button';
import GroupStyle from './style';
import CreateGroup from './createGroup';
import { Link } from 'react-router-dom';

const  styling = GroupStyle();



const Group = () => {
  const [createGroup, setCreateGroup] = useState(false);

  const handleChange = () => {
    setCreateGroup(true)
  }

  return <>
           <Layout>
              <div style={styling.createGroupContainer}>
                {!createGroup && <Button variant="contained" style={styling.createGrpBtn} onClick={handleChange}>Create Group</Button>}
              </div>
              {createGroup && <CreateGroup onClose={(status) => setCreateGroup(false)}/>}

              <div className="row justify-content-center col">
                <div className="col-md-6">
                   <Link to={`/group/content`}><Button variant="contained" style={styling.createGrpBtn}>Content Team</Button></Link>
                </div>
              </div>
           </Layout>
         </>
}
export default Group;
