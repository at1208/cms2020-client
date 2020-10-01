import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import SignIn from './components/signin/signin';
import Dashboard from './components/dashboard/dashboard'
import Projects from './components/project/project';
import Members from './components/member/member';
import Department from './components/department/department';
import Designation from './components/designation/designation';

ReactDOM.render(<BrowserRouter>
                  <Route path="/" component={SignIn} exact/>
                  <Route path="/dashboard" component={Dashboard} exact/>
                  <Route path="/member" component={Members} exact/>
                  <Route path="/projects" component={Projects} exact/>
                  <Route path="/department" component={Department} exact/>
                  <Route path="/designation" component={Designation} exact/>
                </BrowserRouter>,
                document.getElementById('root'))
