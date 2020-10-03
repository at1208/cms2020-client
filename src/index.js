import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./globalStyle.css";
import { ThemeProvider } from "@chakra-ui/core";


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

ReactDOM.render(<BrowserRouter>
                    <ThemeProvider>
                        <Route path="/" component={SignIn} exact/>
                        <Route path="/dashboard" component={Dashboard} exact/>
                        <Route path="/contact" component={Contact} exact/>
                        <Route path="/offerletter" component={OfferLetter} exact/>
                        <Route path="/member" component={Members} exact/>
                        <Route path="/projects" component={Projects} exact/>
                        <Route path="/profile" component={Profile} exact/>
                        <Route path="/department" component={Department} exact/>
                        <Route path="/designation" component={Designation} exact/>
                        <Route path="/workspace/article" component={Workspace} exact/>
                        <Route path="/workspace/article/write" component={AddArticle} exact/>
                        <Route path="/workspace/article/categories" component={Categories} exact/>
                        <Route path="/workspace/article/tags" component={Tags} exact/>
                   </ThemeProvider>
                </BrowserRouter>,
                document.getElementById('root'))
