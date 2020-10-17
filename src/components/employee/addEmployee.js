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
import { inviteonBoard } from '../../actions/auth';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import MemberStyle from './style';
const  styling = MemberStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddMember = ({ onClose }) => {
  const toast = useToast();
  const [departments, setDepartment] = useState([]);
  const [designations, setDesignation] = useState([]);


  const [member, setMember] = useState({
        firstName:"",
        lastName:"",
        email:"",
        contactNumber:"",
        department:"",
        designation:"",
  })

  const toaster = (title, description, status) => {
        return toast({
        position: "top",
        title: title,
        description: description,
        status: status,
        duration: 5000
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
         console.log(err)
      })
  },[])

const handleInvitation = () => {
  inviteonBoard(member)
    .then(response => {
      if(response.error){
        return toaster("", response.error, "error")
      }
     return toaster(response.message, "", "success")
    })
    .catch((err) => {
     return toaster("Something went wrong!", "Please try after sometime", "error")
    })
}

const handleDesignation = (x, y) => {
      const d =  y.map((item) => {
         return item._id
       })
        setMember({...member, designation: d})
}

const handleDepartment = (x, y) => {
      const e =  y.map((item) => {
         return item._id
       })
        setMember({...member, department: e})
}

  return   <div className="row justify-content-center" style={styling.outerContainer}>
             <div className="col-md-12" style={styling.addMemberCard}>
                <h1 style={styling.title}>Add Employee</h1>
                 <form style={styling.addMemberForm} className="text-center">

                 <div className="row col justify-content-center">
                    <div className="col-md-6 mt-2 mb-2">
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.firstName}
                        onChange={(e) => setMember({...member, firstName:e.target.value})}
                        label="First name"
                    />
                   </div>
                  <div className="col-md-6 mt-2 mb-2">
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.lastName}
                        onChange={(e) => setMember({...member, lastName:e.target.value})}
                        label="Last name"
                    />
                    </div>
                 </div>

                 <div className="row col justify-content-center">
                    <div className="col-md-6 mt-2 mb-2">
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.email}
                        onChange={(e) => setMember({...member, email:e.target.value})}
                        label="Email Id"
                    />
                    </div>
                    <div className="col-md-6 mt-2 mb-2">
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}
                        value={member.contactNumber}
                        onChange={(e) => setMember({...member, contactNumber:e.target.value})}
                        label="Contact number"
                    />
                    </div>
                 </div>

                 <div className="row col justify-content-center">
                    <div className="col-md-6 mt-2 mb-2">
                    <Autocomplete
                        multiple
                        options={designations}
                        onChange={handleDesignation}
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
                    </div>
                    <div className="col-md-6 mt-2 mb-2">
                    <Autocomplete
                        multiple
                        options={departments}
                        onChange={handleDepartment}
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
                    </div>
                 </div>
                      <Button variant="contained" color="primary" className="mt-2" size="large" style={styling.inviteBtn} onClick={handleInvitation}>Invite on board!</Button>
                 </form>
                 <IconButton aria-label="close" style={styling.closeBtn} onClick={() => onClose(false)}>
                    <CancelIcon color="secondary" fontSize="large"/>
                 </IconButton>
              </div>
           </div>
}

export default AddMember;
