import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useToast } from "@chakra-ui/core";
import GroupStyle from './style';
const  styling = GroupStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddMember = ({ onClose }) => {
  const toast = useToast();
  const [participants, setParticipant] = useState([]);



  const [group, setGroup] = useState({
        name:"",
        participants: ""
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




  return   <div className="row justify-content-center" style={styling.outerContainer}>
             <div className="col-md-6 card" style={styling.addMemberCard}>
                <h1 style={styling.title}>Group</h1>
                 <form style={styling.addMemberForm}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        style={styling.memberInput}


                        label="Group name"
                    />

                      <Button variant="contained" color="primary" size="large" style={styling.inviteBtn} fullWidth >Create Group</Button>
                 </form>
                  <Button variant="contained" color="secondary" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
             </div>
           </div>
}

export default AddMember;
