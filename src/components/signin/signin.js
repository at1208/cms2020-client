import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';
import { signin, authenticate, isAuth } from '../../actions/auth';
import { useToast } from "@chakra-ui/core";
import SignInStyle from './style';
const  styling = SignInStyle();


const SignIn = () => {
  const history = useHistory();
  const toast = useToast();

  const emailFromLS = () => {
  if(localStorage.getItem("email")){
     return JSON.parse(localStorage.getItem("email"));
  }
}

  const [credentials, setCredentials] = useState({
         email: "",
         password: ""
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

  useEffect(() => {
   return setCredentials({...credentials, email: emailFromLS()})
 },[])

 useEffect(() => {
   if(isAuth()){
     return history.push('/profile')
   }
 },[])



  const handleSubmit = (e) => {
         e.preventDefault();
         signin(credentials)
           .then((response) => {
             if(response.error){
                return toaster(response.error,"", "error")
             }
             authenticate(response, () => {
               history.push("/dashboard");
             })
           })
           .catch((err) => {
             console.log(err)
           })

        // console.log(credentials)
  }
  return  <>
            <div>
               <h1 style={styling.title}>Management Login</h1>
                     <div style={styling.centerCard} className="loginContainer">
                        {/*  <div className="row justify-content-center">
                              <font style={styling.companyName}>Company Logo</font>
                          </div>*/}

                          <form onSubmit={handleSubmit} style={styling.form}>
                             <TextField
                                     variant="outlined"
                                     label="Email"
                                     fullWidth
                                     style={styling.emailInput}
                                     value={credentials.email}
                                     onChange={(e) => setCredentials({...credentials, email: e.target.value })} />
                              <br />
                             <TextField
                                     variant="outlined"
                                     label="Password"
                                     type="password"
                                     fullWidth
                                     style={styling.passwordInput}
                                     value={credentials.password}
                                     onChange={(e) => setCredentials({...credentials, password: e.target.value })} />
                              <br />
                             <button style={styling.submitButton}
                                     className="loginbtn btn-block"
                                     onClick={handleSubmit}>
                                     Login
                              </button>
                          </form>
                      </div>
            </div>
          </>
}

export default SignIn;
