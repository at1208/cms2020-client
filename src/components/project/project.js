import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import AddProject from './addProject';
import Button from '@material-ui/core/Button';
import MemberStyle from './style';
import { useToast } from "@chakra-ui/core";
import { getProjects } from '../../actions/project'
import Card from './card';

const  styling = MemberStyle();

const Project = () => {
  const toast = useToast();
  const [addProject, setAddProject] = useState(false);
  const [projects, setProject] = useState();

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
  const handleChange = () => {
     setAddProject(true)
  }

  useEffect(() => {
    getProjects()
      .then(response => {
        if(response.error){
          return console.log(response.error)
        }
        setProject(response.result)
      })
      .catch((err) => {
         return toaster("Something went wrong!", "Please try after sometime", "error")
      })
  },[])


  const showProjects = () => {
        return projects && projects.map((item, i) => {
          return <Card data={item} key={i}/>
        })
  }

  return <>
          <Layout>
          <div style={styling.addProjectContainer}>
               {!addProject && <Button variant="contained" style={styling.addProBtn} onClick={handleChange}>Add Project</Button>}
           </div>
          {addProject && <AddProject onClose={(status) => setAddProject(false)}/>}
           <div className="row col justify-content-center">
              {showProjects()}
           </div>
          </Layout>
         </>
}

export default Project;
