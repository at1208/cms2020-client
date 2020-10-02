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
import Button from '@material-ui/core/Button';
import ImageUpload from './imageUpload';
import Preview from './preview';
import ArticleStyle from './style';
const  styling = ArticleStyle();

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor:  "#FE6B8B"
  },
}))(LinearProgress);

const top100Films = [
  { title: 'geekboy.tech'},
  { title: 'codeocean.com'},
  { title: 'geeksocean.com'},
];


const WriteArticle  = () => {

const blogFromLS = () => {
if(localStorage.getItem("blog")){
   return JSON.parse(localStorage.getItem("blog"));
}
return;
};

const blogTitleFromLS = () => {
if(localStorage.getItem("title")){
return JSON.parse(localStorage.getItem("title"));
}
return
};

const blogMetaDescFromLS = () => {
if(localStorage.getItem("mDescription")){
return JSON.parse(localStorage.getItem("mDescription"));
}
return
};


  const [article, setArticle] = useState({
    body:blogFromLS(),
    title:blogTitleFromLS(),
    mDescrption:blogMetaDescFromLS(),
    step1:false,
    step2:false,
    step3:false,
    step4:false,
    step5:false,
    step6:false,
    step7:false
  })

  const [featureImg, setFeatureImg] = useState();

  const { step1, step2, step3, step4, step5, step6, step7, title, body, mDescrption } = article





  const handleChangeEditor = (content) => {
         localStorage.setItem("blog", JSON.stringify(content));
         setArticle({...article, body: content})
  }

  const handleChangeTitle = (e) => {
    localStorage.setItem("title", JSON.stringify(e.target.value));
     setArticle({...article, title:e.target.value})
  }

  const handleChangeDescription = (e) => {
    localStorage.setItem("mDescription", JSON.stringify(e.target.value));
     setArticle({...article, mDescrption:e.target.value})
  }

 const handleChangeImage = (photoFile) => {
   setFeatureImg(photoFile)
 }
  const progressHandle = () => {
    if(!step1 && !step2 && !step3 && !step4 && !step5 && !step6 && !step7){
      return 12.5;
    }
    if(step1){
      return 25;
    }
    if(step2){
      return 37.5;
    }
    if(step3){
      return 50
    }
    if(step4){
      return 62.5;
    }
    if(step5){
      return 75;
    }
    if(step6){
      return 87.5;
    }
    if(step7){
      return 100
    }
  }

  const backHandle = name => e => {
    if(name==="domain"){
      return setArticle({...article, step1: false, step2:false,
                              step3:false, step4:false,
                              step5:false, step6:false,
                              step7:false, step8:false})
    }
    if(name==="backtoStep1"){
      return setArticle({...article, step2: false, step1:true})
    }
    if(name==="backtoStep2"){
      return setArticle({...article, step3: false, step2:true})
    }
    if(name==="backtoStep3"){
      return setArticle({...article, step4: false, step3:true})
    }
    if(name==="backtoStep4"){
      return setArticle({...article, step5: false, step4:true})
    }
    if(name==="backtoStep5"){
      return setArticle({...article, step6: false, step5:true})
    }
    if(name==="backtoStep6"){
      return setArticle({...article, step7: false, step6:true})
    }
    if(name==="backtoStep7"){
      return setArticle({...article, step8: false, step7:true})
    }
  }

  const nextHandle = name => e => {
        if(name==="gotoStep1"){
          return setArticle({...article, step1: true, step2:false,
                                  step3:false, step4:false,
                                  step5:false, step6:false,
                                  step7:false, step8:false})

        }
       if(name==="gotoStep2"){
         return setArticle({...article, step1: false, step2:true})

       }
       if(name==="gotoStep3"){
         return setArticle({...article, step2: false, step3:true})

       }
       if(name==="gotoStep4"){
          return setArticle({...article, step3: false, step4:true})

       }
       if(name==="gotoStep5"){
          return setArticle({...article, step4: false, step5:true})

       }
       if(name==="gotoStep6"){
          return setArticle({...article, step5: false, step6:true})

       }
       if(name==="gotoStep7"){
          return setArticle({...article, step6: false, step7:true})

       }

  }

  const navigationHandle = () => {
          if(!step1 && !step2 && !step3 && !step4 && !step5 && !step6 && !step7){
            return  <div className="row justify-content-center">
                        <div className="col-4">

                        </div>
                        <div className="col-4">
                          <div className=" ">
                            <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={nextHandle("gotoStep1")}>Next</Button>
                          </div>
                        </div>
                    </div>
          }
        if(step1){
          return  <div className="row justify-content-center">
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={backHandle("domain")}>Back</Button>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className=" ">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={nextHandle("gotoStep2")}>Next</Button>
                        </div>
                      </div>
                  </div>
        }
        if(step2){
          return  <div className="row justify-content-center">
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={backHandle("backtoStep1")}>Back</Button>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn}  fullWidth onClick={nextHandle("gotoStep3")}>Next</Button>
                        </div>
                      </div>
                  </div>
        }
        if(step3){
          return  <div className="row justify-content-center">
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={backHandle("backtoStep2")}>Back</Button>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn}  fullWidth onClick={nextHandle("gotoStep4")}>Next</Button>
                        </div>
                      </div>
                  </div>
        }
        if(step4){
          return  <div className="row justify-content-center">
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={backHandle("backtoStep3")}>Back</Button>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn}  fullWidth onClick={nextHandle("gotoStep5")}>Next</Button>
                        </div>
                      </div>
                  </div>
        }
        if(step5){
          return  <div className="row justify-content-center">
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={backHandle("backtoStep4")}>Back</Button>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn}  fullWidth onClick={nextHandle("gotoStep6")}>Next</Button>
                        </div>
                      </div>
                  </div>
        }
        if(step6){
          return  <div className="row justify-content-center">
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn} fullWidth onClick={backHandle("backtoStep5")}>Back</Button>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="">
                          <Button variant="contained" style={styling.navbarBtn}  fullWidth>Publish</Button>
                        </div>
                      </div>
                  </div>
        }
  }
// console.log(featureImg)

  return <>
          <Layout>
             <div style={styling.progressbar} className="container">
                <BorderLinearProgress variant="determinate" value={progressHandle()} />
             </div>
             <div style={styling.navigationContainer}>
                {navigationHandle()}
             </div>
             <div className="container">

             {!step1 && !step2 && !step3 && !step4 && !step5 && !step6 && !step7 && <div className="row justify-content-center">
                   <div className="col-md-5">

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
              </div>}

                 {step1 && <div>
                    <TextField
                     variant="outlined"
                     label="Title"
                     fullWidth
                     style={styling.titleInput}
                     value={title}
                     onChange={handleChangeTitle}
                    />
                    <Editor  onChange={handleChangeEditor} data={body}/>
                 </div>}


                {step2 && <div className="row justify-content-center">
                     <div className="col-md-8">
                        <TextField
                          variant="outlined"
                          label="Meta description"
                          multiline
                          rows={3}
                          style={styling.mDescInput}
                          fullWidth
                          value={mDescrption}
                          onChange={handleChangeDescription}
                        />
                     </div>
                  </div>}

                {step3 && <div className="row justify-content-center">
                       <div className="col-md-8">
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
                          style={styling.categoryInput}
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
                </div>}
                {step4 && <div className="row justify-content-center">
                     <div className="col-md-8">
                        <Autocomplete
                            multiple
                            options={top100Films}
                            fullWidth
                            disableCloseOnSelect
                            style={styling.tagInput}
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
                </div>}
                {step5 && <div>
                  <ImageUpload selectedImg={handleChangeImage} selectedPhoto={featureImg}/>
                  </div>}

                {step6 && <Preview data={article} />}
             </div>
          </Layout>
         </>
}
export default WriteArticle
