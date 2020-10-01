import React, { useState, useEffect } from 'react'
import Layout from '../../layout/layout'
import Editor from "./editor";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArticleStyle from './style';
const  styling = ArticleStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'pink',
  },
}))(LinearProgress);

const WriteArticle  = () => {

  const [article, setArticle] = useState({
    body:"",
    title:"",
    mTitle:"",
    mDescrption:""
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
             <div style={styling.progressbar} className="container">
                <BorderLinearProgress variant="determinate" value={50} />
             </div>
             <div className="container">
                <Editor  onChange={(content) => console.log(content)}/>
                <div>
                    <Autocomplete
                        options={top100Films}
                        fullWidth
                        disableCloseOnSelect
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
                        <TextField {...params} variant="outlined" label="Select domain" />
                        )}
                    />
                </div>
                <div>
                  <Autocomplete
                      multiple

                      options={top100Films}
                      fullWidth
                      disableCloseOnSelect

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
                      <TextField {...params} variant="outlined" label="Select category"  />
                      )}
                  />
                </div>
                <div>
                  <Autocomplete
                      multiple

                      options={top100Films}
                      fullWidth
                      disableCloseOnSelect

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
                      <TextField {...params} variant="outlined" label="Select tags"  />
                      )}
                  />
                </div>
             </div>
          </Layout>
         </>
}
export default WriteArticle
