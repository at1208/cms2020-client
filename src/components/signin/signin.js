import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';
import SignInStyle from './style';
const  styling = SignInStyle();

const SignIn = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
         email: "",
         password: ""
  });
  const handleSubmit = (e) => {
         e.preventDefault();
         history.push("/dashboard");
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
