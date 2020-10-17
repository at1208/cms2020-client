import React, { useState, useEffect } from 'react';
import Style from './style';
import Layout from '../layout/layout';
import Button from '@material-ui/core/Button';
import AddTask from './addTask';
import Fade from 'react-reveal/Fade';

const Task = () => {
const  styling = Style();
const [open, setOpen] = useState(false);


const handleChange = () => {
   setOpen(true)
}


const taskHeader = () => {
  return <div className="row col" style={styling.taskHeader}>
            <div className="col-md-8">
              <span style={styling.title}>Task</span>
            </div>
            <div className="col-md-4">
               <div className="row justify-content-end">
                 <Button variant="contained" style={styling.createTask} onClick={handleChange}>
                   <i className="la la-plus" style={styling.plusIcon}/>
                  Add Task
                 </Button>
               </div>
            </div>
         </div>
}


   return <>
           <Layout>
               <div>
               {open &&  <Fade top><AddTask onClose={() => setOpen(false)}/></Fade>}
               {!open && <div>
                 {taskHeader()}
                </div>}
               </div>
           </Layout>
          </>
}

export default Task;
