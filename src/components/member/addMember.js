import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useToast } from "@chakra-ui/core";
import { getDepartments } from '../../actions/department'
import { getDesignations } from '../../actions/designation'
import MemberStyle from './style';
const  styling = MemberStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddMember = ({ onClose }) => {
  const toast = useToast();
  const [departments, setDepartment] = useState([]);
  const [designations, setDesignation] = useState([]);


  const [member, setMember] = useState({
        name:"",
        emailId:"",
        contactNumber:"",
        department:"",
        designation:"",
        dateOfJoining:""
  })

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
    getDepartments()
      .then(response => {
        if(response.error){
          return console.log(response.error)
        }
        setDepartment(response.result)
      })
      .catch((err) => {
         return toaster("Something went wrong!", "Please try after sometime", "error")
      })
  },[])

  useEffect(() => {
    getDesignations()
      .then(response => {
        if(response.error){
          return console.log(response.error)
        }
        setDesignation(response.result)
      })
      .catch((err) => {
         return toaster("Something went wrong!", "Please try after sometime", "error")
      })
  },[])


  return <>
           <div className="row justify-content-center">
             <div className="col-md-6 card" style={styling.addMemberCard}>
                <h1 style={styling.title}>Add Member</h1>
                 <form style={styling.addMemberForm}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.name}
                        onChange={(e) => setMember({...member, name:e.target.value})}
                        label="Name"
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.emailId}
                        onChange={(e) => setMember({...member, emailId:e.target.value})}
                        label="Email Id"
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.contactNumber}
                        onChange={(e) => setMember({...member, contactNumber:e.target.value})}
                        label="Contact number"
                    />
                    <Autocomplete
                        multiple
                        options={designations}
                        fullWidth
                        style={styling.memberInput}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.designationName}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                        />
                        {option.designationName}
                        </React.Fragment>
                        )}
                        renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Designation" />
                        )}
                    />
                    <Autocomplete
                        multiple
                        options={departments}
                        fullWidth
                        style={styling.memberInput}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.departmentName}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                        />
                        {option.departmentName}
                        </React.Fragment>
                        )}
                        renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Department"  />
                        )}
                    />
                      <Button variant="contained" color="primary" size="large" style={styling.inviteBtn} fullWidth>Invite on board!</Button>
                 </form>
                  <Button variant="contained" color="secondary" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
             </div>
           </div>
         </>
}

export default AddMember;
