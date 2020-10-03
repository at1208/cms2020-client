import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import AddProject from './addProject';
import Button from '@material-ui/core/Button';
import MemberStyle from './style';
const  styling = MemberStyle();

const Project = () => {
  const [addProject, setAddProject] = useState(false);
  const handleChange = () => {
     setAddProject(true)
  }
  return <>
          <Layout>
          {!addProject && <div style={styling.addProjectContainer}>
               <Button variant="contained" style={styling.addProBtn} onClick={handleChange}>Add Project</Button>
           </div>}
          {addProject && <AddProject onClose={(status) => setAddProject(false)}/>}
          </Layout>
         </>
}

export default Project;
