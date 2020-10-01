import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import MemberStyle from './style';
const  styling = MemberStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddMember = ({ onClose }) => {
  const [member, setMember] = useState({
        name:"",
        emailId:"",
        contactNumber:"",
        department:"",
        designation:"",
        dateOfJoining:""
  })

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 }
  ];

  return <>
           <div className="row justify-content-center">
             <div className="col-md-6 card" style={styling.addMemberCard}>
                <h1 style={styling.title}>ADD MEMBER</h1>
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
                        id="team-member"
                        options={top100Films}
                        fullWidth
                        style={styling.memberInput}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                        />
                        {option.title}
                        </React.Fragment>
                        )}
                        renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Designation" />
                        )}
                    />
                    <Autocomplete
                        multiple
                        id="team-member"
                        options={top100Films}
                        fullWidth
                        style={styling.memberInput}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                        />
                        {option.title}
                        </React.Fragment>
                        )}
                        renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Department"  />
                        )}
                    />
                      <Button variant="contained" color="primary" size="large" style={styling.inviteBtn} fullWidth>Invite on board!</Button>
                 </form>
                  <Button variant="contained" color="primary" style={styling.closeBtn} onClick={() => onClose(false)}>Close</Button>
             </div>
           </div>
         </>
}

export default AddMember;
