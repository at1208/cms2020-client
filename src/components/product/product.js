import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import AddProject from './addProject';
import Button from '@material-ui/core/Button';
import MemberStyle from './style';
import { useToast } from "@chakra-ui/core";
import TextField from '@material-ui/core/TextField';
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
    // getProjects()
    //   .then(response => {
    //     if(response.error){
    //       return console.log(response.error)
    //     }
    //     setProject(response.result)
    //   })
    //   .catch((err) => {
    //      return toaster("Something went wrong!", "Please try after sometime", "error")
    //   })
  },[])


  // const showProjects = () => {
  //       return projects && projects.map((item, i) => {
  //         return <Card data={item} key={i}/>
  //       })
  // }

const productHeader = () => {
  return <div className="row col" style={styling.pdtHeader}>
            <div className="col-md-8">
              <span style={styling.title}>Products</span>
            </div>
            <div className="col-md-4">
               <div className="row justify-content-end">
                 <Button variant="contained" style={styling.createPdt}>
                   <i className="la la-plus" style={styling.plusIcon}/>
                   Create Product
                 </Button>
               </div>
            </div>
         </div>
}

const searchPdt = () => {
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
             <div className="col-md-4">
              <Button variant="contained" style={styling.field} fullWidth style={styling.searchbtn}>
                Search
              </Button>
             </div>
          </div>
}

  return <>
          <Layout>
             <div>
               {productHeader()}
             </div>
             <div>
                {searchPdt()}
             </div>
          </Layout>
         </>
}

export default Project;
