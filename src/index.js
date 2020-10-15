import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import 'medium-editor/dist/css/themes/default.css';
import 'medium-editor/dist/css/medium-editor.css';
import 'line-awesome/dist/font-awesome-line-awesome/css/all.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'antd/dist/antd.css';
import "./globalStyle.css";
import { ThemeProvider } from "@chakra-ui/core";
import PrivateRoute from './components/protected/private';



import SignIn from './components/signin/signin';
import Dashboard from './components/dashboard/dashboard'
import Products from './components/product/product';
import Employees from './components/employee/employee';
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
import Team from './components/team/team';
import GroupChat from './components/group/groupChat';
import Message from './components/message/message';
import PrivateChat from './components/message/privateChat';
import Task from './components/task/task';




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
                        <PrivateRoute path="/Employees" component={Employees} exact/>
                        <PrivateRoute path="/Products" component={Products} exact/>
                        <PrivateRoute path="/profile" component={Profile} exact/>
                        <PrivateRoute path="/department" component={Department} exact/>
                        <PrivateRoute path="/designation" component={Designation} exact/>
                        <PrivateRoute path="/team" component={Team} exact/>
                        <PrivateRoute path="/team/:room" component={GroupChat} exact/>
                        <PrivateRoute path="/message" component={Message} exact/>
                        <PrivateRoute path="/task" component={Task} exact/>
                        <PrivateRoute path="/message/:room" component={PrivateChat} exact/>


                   </ThemeProvider>
                </BrowserRouter>,
                document.getElementById('root'))
