import { createProject } from '../../actions/project'
import React, { useState, useEffect } from 'react'
import Layout from '../layout/layout'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import ProjectStyle from './style';
import CloseIcon from '@material-ui/icons/Close';
const  styling = ProjectStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddProject = ({ onClose }) => {
      const [project, setProject] = useState({
            projectName:"",
            domainAddress:"",
            projectLogo:"",
            teamMember:"",
            teamLeader:""
       });

  useEffect(() => {

  })


  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 }
  ];



  return <>
          <Layout>
               <div className="row justify-content-center">
                 <div className="col-md-6 card" style={styling.addProjectCard}>
                  <h1 style={styling.title}>Add Project</h1>
                  <form>
                  <TextField
                          onChange={(e) => setProject({...project, projectName: e.target.value })}
                          value={project.projectName}
                          className="projectInput"
                          variant="outlined"
                          fullWidth
                          label="Project name"
                           />
                   <TextField
                           onChange={(e) => setProject({...project, domainAddress: e.target.value })}
                           value={project.domainAddress}
                           className="projectInput"
                           variant="outlined"
                           fullWidth
                           label="domain address"
                            />
                    <Autocomplete
                        multiple
                        id="team-member"
                        options={top100Films}
                        fullWidth
                        disableCloseOnSelect
                        className="projectInput"
                        getOptionLabel={(option) => option.title}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                        />
                        {option.title}
                        </React.Fragment>
                        )}

                        renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Add team member" placeholder="Add team member" />
                        )}
                    />
                    <Autocomplete
                        id="team-member"
                        options={top100Films}
                        fullWidth
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        className="projectInput"
                        checkedIcon={checkedIcon}
                        checked={selected}
                        />
                        {option.title}
                        </React.Fragment>
                        )}

                        renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Add team leader" placeholder="Add team leader" />
                        )}
                    />
                      <Button variant="contained" color="primary" size="large" style={styling.createBtn} fullWidth>Create Project</Button>
                  </form>
                    <Button variant="contained" color="secondary" style={styling.closeBtn} onClick={() => onClose(false)}><CloseIcon /></Button>
               </div>
            </div>
          </Layout>
         </>
}

export default AddProject;
