import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InvitationStyle from './style';
import { signup } from '../../actions/auth';
import jwt from 'jsonwebtoken';
import { useToast } from "@chakra-ui/core";
import { useHistory } from 'react-router-dom';
const  styling = InvitationStyle();



const Invitation  = ({ match }) => {
  const toast = useToast();
  const history = useHistory();
  const [member, setMember] = useState({
      password:"",
      confirmPassword:"",
      matchStatus: false
  });

  const toaster = (title, description, status) => {
        return toast({
        position: "top",
        title: title,
        description: description,
        status: status,
        duration: 5000,
        })
  }

  const { firstName, lastName, email, department, designation, contactNumber } = jwt.decode(match.params.token);
  console.log( firstName, lastName, email, department, designation, contactNumber)
  const validatePassword = () => {
    if(member.password !== member.confirmPassword){
      return false;
    }
    return true;
  }

  useEffect(() => {
   setMember({...member, matchStatus: validatePassword()})
  },[member.confirmPassword])

  const handleSubmit = (e) => {
    e.preventDefault()
    signup({ password: member.password, token: match.params.token})
     .then(response => {
       if(response.error){
         return toaster(response.error,"", "error")
       }
       if(response.result){
         return toaster(response.result,"", "warning")
       }
       history.push('/')
       return toaster(response.message,"", "success")
     })
     .catch((err) => {
       return toaster("Something went wrong!", "Please try after sometime", "error")
     })
  }

 return <>
 <div>
    <h1 style={styling.title}>{`Hello ${firstName} ${lastName}`}</h1>
          <div style={styling.centerCard} className="loginContainer">
               <form   style={styling.form}>
                  <TextField
                          variant="outlined"
                          label="Create password"
                          fullWidth
                          type="password"
                          value={member.password}
                          onChange={(e) => setMember({...member, password: e.target.value})}
                         />
                   <br />
                  <TextField
                          variant="outlined"
                          label="Confirm password"
                          fullWidth
                          type="password"
                          value={member.confirmPassword}
                          onChange={(e) => setMember({...member, confirmPassword: e.target.value})}
                          style={styling.passwordInput}
                            />
                   <br />
                   <div style={styling.warningContainer}>
                   {!member.matchStatus && <small style={{ color: "red" }}>Password do not match</small>}
                   </div>
                  <button style={styling.submitButton}
                          onClick={handleSubmit}
                          disabled={!member.matchStatus}
                          className="loginbtn btn-block"
                           >
                          Take me on board!
                   </button>
               </form>
           </div>
 </div>
        </>
}

export default Invitation;
