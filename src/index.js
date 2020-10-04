import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./globalStyle.css";
import { ThemeProvider } from "@chakra-ui/core";

import PrivateRoute from './components/protected/private';


import SignIn from './components/signin/signin';
import Dashboard from './components/dashboard/dashboard'
import Projects from './components/project/project';
import Members from './components/member/member';
import Department from './components/department/department';
import Designation from './components/designation/designation';
import Workspace from './components/workspace/article/article';
import AddArticle from './components/workspace/article/writeArticle';
import Categories from './components/workspace/article/categories';
import Tags from './components/workspace/article/tags';
import Profile from './components/profile/profile';
import Contact from './components/contact/contact';
import OfferLetter from './components/offerletter/offerletter';
import Invitation from './components/invitation/invitation';



ReactDOM.render(<BrowserRouter>
                    <ThemeProvider>
                        <Route path="/" component={SignIn} exact/>
                        <Route path="/auth/onboard/:token" component={Invitation} exact/>

                        <PrivateRoute path="/dashboard" component={Dashboard} exact/>
                        <PrivateRoute path="/workspace/article" component={Workspace} exact/>
                        <PrivateRoute path="/workspace/article/write" component={AddArticle} exact/>
                        <PrivateRoute path="/workspace/article/categories" component={Categories} exact/>
                        <PrivateRoute path="/workspace/article/tags" component={Tags} exact/>
                        <PrivateRoute path="/contact" component={Contact} exact/>
                        <PrivateRoute path="/offerletter" component={OfferLetter} exact/>
                        <PrivateRoute path="/member" component={Members} exact/>
                        <PrivateRoute path="/projects" component={Projects} exact/>
                        <PrivateRoute path="/profile" component={Profile} exact/>
                        <PrivateRoute path="/department" component={Department} exact/>
                        <PrivateRoute path="/designation" component={Designation} exact/>


                   </ThemeProvider>
                </BrowserRouter>,
                document.getElementById('root'))
