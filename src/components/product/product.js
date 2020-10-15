import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import AddProduct from './addProduct';
import Button from '@material-ui/core/Button';
import MemberStyle from './style';
import { useToast } from "@chakra-ui/core";
import TextField from '@material-ui/core/TextField';
// import { getProjects } from '../../actions/project'
import Fade from 'react-reveal/Fade';
import Card from './productCard';

const  styling = MemberStyle();

const Project = () => {
  const toast = useToast();
  const [open, setOpen] = useState(false);


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
     setOpen(true)
  }



const productHeader = () => {
  return <div className="row col" style={styling.pdtHeader}>
            <div className="col-md-8">
              <span style={styling.title}>Products</span>
            </div>
            <div className="col-md-4">
               <div className="row justify-content-end">
                 <Button variant="contained" style={styling.createPdt} onClick={handleChange}>
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
             <div className="col-md-4 pt-2">
              <Button variant="contained" style={styling.field} fullWidth style={styling.searchbtn}>
                Search
              </Button>
             </div>
          </div>
}

  return <>
          <Layout>
             {open &&  <Fade top><AddProduct onClose={() => setOpen(false)}/></Fade>}
             {!open && <div>
                 <div>
                   {productHeader()}
                 </div>
                 <div>
                    {searchPdt()}
                 </div>
             </div>}
            <div className="row col justify-content-center">
             <Card />
            </div>
          </Layout>
         </>
}

export default Project;
