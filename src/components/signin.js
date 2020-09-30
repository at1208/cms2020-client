import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SignInStyle from './style';
const  styling = SignInStyle();

const SignIn = () => {

  const [credentials, setCredentials] = useState({
         email: "",
         password: ""
  });
  const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(credentials)
  }
  return  <>
            <div>
                     <div style={styling.centerCard} className="loginContainer">
                          <div className="row justify-content-center">
                             <div className="col-6">
                               <font style={styling.companyName}>Geeks Ocean</font>
                             </div>
                             <div className="col-3">
                                 <img src="/logo.png" width={50}/>
                             </div>
                          </div>
                          <hr />
                          <form onSubmit={handleSubmit}>
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
                                     className="loginbtn"
                                     onClick={handleSubmit}>
                                     Login
                              </button>
                          </form>
                      </div>
            </div>
          </>
}

export default SignIn;
