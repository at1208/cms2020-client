import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/signin';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

ReactDOM.render(<BrowserRouter>
                  <Route path="/" component={SignIn} />
                </BrowserRouter>,
                document.getElementById('root'))
