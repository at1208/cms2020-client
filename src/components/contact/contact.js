import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout'
import { Input } from 'antd';
import Button from '@material-ui/core/Button';
import AddContact from './addContact';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from 'react-reveal/Fade';

import Style from './style'

const { Search } = Input;


const suffix = (
  <i
    className="la la-search sb-icons"
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);



const Contact = () => {
const styling = Style()
const [open, setOpen] = useState(false);

const searchBar = () => {
  return <div className="row col" style={styling.searchBar}>
            <div className="col-md-6">
              <span style={styling.contactTitle}>Contacts</span>
            </div>
            <div className="col-md-5">
              <Search
                    className="search-input"
                    placeholder="Search by Name"
                    onSearch={value => console.log(value)}

                  />
            </div>
         </div>
}

const handleChange = () => {
   setOpen(true)
}

  return <>
           <Layout>
           {open &&  <Fade top><AddContact onClose={() => setOpen(false)}/></Fade>}
           {!open && <div>
             {searchBar()}
             <div className="row col">
               <div className="col-md-3">

                 <div style={styling.add}>
                 <Button variant="contained" style={styling.addBtn} fullWidth onClick={() => setOpen(true)}>
                 <li className="la la-plus" style={styling.addIcon}/>
                  Add Contact
                 </Button>
                 </div>

                 <div style={styling.filterList}>
                 <ListItem button className="filterBtn" >
                 <ListItemText primary="All" />
                 </ListItem>
                 <ListItem button className="filterBtn" >
                 <ListItemText primary='Staff' />
                 </ListItem>
                 <ListItem button className="filterBtn" >
                 <ListItemText primary='Client' />
                 </ListItem>
                 </div>


               </div>
               <div className="col-md-7">
               </div>
             </div>
           </div>}
           </Layout>
         </>
}
export default Contact;
