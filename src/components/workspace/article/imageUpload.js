// imports the React Javascript Library
import React from "react";
//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";

import Icon from "@material-ui/core/Icon";
import PageviewIcon from "@material-ui/icons/Pageview";
import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CollectionsIcon from "@material-ui/icons/Collections";

import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";


import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  cardName:{
    padding:"20px 30px 20px 30px"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  imgIcon:{
    fontSize:"40px"
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  cardHeader: {
    textalign: "center",
    align: "center"
  },
  input: {
    display: "none"
  },
  title: {
    color: blue[800],
    fontWeight: "bold",
    fontFamily: "Montserrat",
    align: "center"
  },
  button: {
    color: blue[900],
    margin: 10
  },
  secondaryButton: {
    color: "gray",
    margin: 10
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: "default"
  },
});



class ImageUploadCard extends React.Component {

  state = {
    selectedFile: this.props.selectedPhoto
  };
  handleUploadClick = event => {
    var file = event.target.files[0];
    this.props.selectedImg(file)
    this.setState({ selectedFile: file })
  };


  renderInitialState() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              single
              type="file"
              onChange={this.handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                 <AddPhotoAlternateIcon className={classes.imgIcon}/>
              </Fab>
            </label>
      </React.Fragment>
    );
  }


  renderUploadedState() {
    const { classes, theme } = this.props;
    const renderPhoto = () => {
   if(process.browser && this.props.selectedPhoto && typeof(this.props.selectedPhoto)==='object'){
     return URL.createObjectURL(this.props.selectedPhoto);
   }
 }
    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          <img
            width="100%"
            className={classes.media}
            src={renderPhoto()}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    this.setState({
      selectedFile: null,
    });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Card className={classes.cardName}>
            {this.renderInitialState()}
            {this.renderUploadedState()}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
