import { createProject } from '../../actions/project'
import React, { useState, useEffect } from 'react'
import Layout from '../layout/layout'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import ProjectStyle from './style';
import CloseIcon from '@material-ui/icons/Close';
import { getMembers } from '../../actions/member';
import { useToast } from "@chakra-ui/core";




const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



const AddProject = ({ onClose }) => {
      const toast = useToast();
      const  styling = ProjectStyle();
      const [members, setMember] = useState([]);
      const [project, setProject] = useState({
            projectName:"",
            domainAddress:"",
            projectLogo:"",
            teamMember:"",
            teamLeader:""
       });

   const { projectName, domainAddress, projectLogo, teamMember, teamLeader } = project;
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
      getMembers()
        .then(response => {
          if(response.error){
            console.log(response)
          }
           setMember(response.result)
        })
        .catch((err) => {
          console.log(err)
        })
   },[])


  const handleProject = (e) => {
        e.preventDefault()
        createProject(project)
         .then(response => {
           if(response.error){
             return toaster("", response.error, "error")
           }
           setProject({...project, projectName:"", domainAddress:"", teamMember:"", teamLeader:""})
           return toaster("Project created!", response.result, "success")
         })
         .catch(err => {
            return toaster("Something went wrong!", "Please try after sometime", "error")
         })
  }

  const handleTeamLeader = (x, y) => {
          setProject({...project, teamLeader: y._id})
  }

  const handleTeamMember = (x, y) => {
        const e =  y.map((item) => {
           return item._id
         })
          setProject({...project, teamMember: e})
  }


  return       <div className="row justify-content-center" style={styling.outerContainer}>
                 <div className="col-md-12" style={styling.addProductCard}>
                  <h1 style={styling.title}>Add Product</h1>
                  <form onSubmit={handleProject} className="text-center">

                  <div className="row col justify-content-center">
                     <div className="col-md-6 mt-2 mb-2">
                     <TextField
                             onChange={(e) => setProject({...project, projectName: e.target.value })}
                             value={project.projectName}
                             className="projectInput"
                             fullWidth
                             variant="outlined"
                             label="Project name"
                              />
                     </div>
                     <div className="col-md-6 mt-2 mb-2">
                     <TextField
                             onChange={(e) => setProject({...project, domainAddress: e.target.value })}
                             value={project.domainAddress}
                             className="projectInput"
                             variant="outlined"
                             fullWidth
                             label="domain address"
                              />
                     </div>
                  </div>

                  <div className="row col justify-content-center">
                     <div className="col-md-6 mt-2 mb-2">
                     <Autocomplete
                         multiple
                         id="team-member"
                         options={members}
                         onChange={handleTeamMember}
                         disableCloseOnSelect
                         getOptionLabel={(option) => option.fullName}
                         renderOption={(option, { selected }) => (
                         <React.Fragment>
                         <Checkbox
                         icon={icon}
                         checkedIcon={checkedIcon}
                         checked={selected}
                         />
                         {option.fullName}
                         </React.Fragment>
                         )}
                         renderInput={(params) => (
                         <TextField {...params} variant="outlined" label="Add team member" placeholder="Add team member" />
                         )}
                     />
                     </div>
                     <div className="col-md-6 mt-2 mb-2">
                     <Autocomplete
                         id="team-member"
                         options={members}
                         onChange={handleTeamLeader}
                         disableCloseOnSelect
                         getOptionLabel={(option) => option.fullName}
                         renderOption={(option, { selected }) => (
                         <React.Fragment>
                         <Checkbox
                         icon={icon}
                         checkedIcon={checkedIcon}
                         checked={selected}
                         />
                         {option.fullName}
                         </React.Fragment>
                         )}
                         renderInput={(params) => (
                         <TextField {...params} variant="outlined" label="Add team leader" placeholder="Add team leader" />
                         )}
                     />
                     </div>
                  </div>
                  <div className="row col justify-content-center">
                      <div className="col-md-12 mt-2 mb-2">
                      <TextField
                      className="projectInput"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      label="Description"
                      />
                      </div>
                  </div>
                      <Button variant="contained" color="primary" size="large" style={styling.createBtn}  onClick={handleProject}>Create Product</Button>
                  </form>
                    <IconButton aria-label="close" style={styling.closeBtn} onClick={() => onClose(false)}>
                       <CancelIcon color="secondary" fontSize="large"/>
                    </IconButton>
               </div>
            </div>
}

export default AddProject;
