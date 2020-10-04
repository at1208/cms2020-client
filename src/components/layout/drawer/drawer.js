import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse'
import {Link,withRouter} from 'react-router-dom';

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

 function PersistentDrawerLeft({ data, match }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openWorkspaceCollapse, setOpenWorkspaceCollapse] = useState(false);

  const handleDrawerOpen = () => {
    // setOpen(true);
  };

  const handleDrawerClose = () => {
    // setOpen(false);
  };

 const isActive = (path) => {
   if(match.path === path){
     return { background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color:"white"}
   }
 }

  function handleOpenWorkspace(){
   setOpenWorkspaceCollapse(!openWorkspaceCollapse);
}



  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/*<IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>*/}
        </div>

        <Link to="/profile">
          <List>
            <ListItem button style={isActive('/profile')}>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Link>

        <Link to="/dashboard">
          <List>
            <ListItem button style={isActive('/dashboard')}>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </Link>

        <Link to="/projects">
          <List>
            <ListItem button style={isActive('/projects')}>
              <ListItemText primary="Project" />
            </ListItem>
          </List>
        </Link>

        <Link to="/member">
          <List>
            <ListItem button style={isActive('/member')}>
              <ListItemText primary="Member" />
            </ListItem>
          </List>
        </Link>

        <Link to="/department">
          <List>
            <ListItem button style={isActive('/department')}>
              <ListItemText primary="Department" />
            </ListItem>
          </List>
        </Link>

        <Link to="/designation">
          <List>
            <ListItem button style={isActive('/designation')}>
              <ListItemText primary="Designation" />
            </ListItem>
          </List>
        </Link>

        <Link to="/contact">
          <List>
            <ListItem button style={isActive('/contact')}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Link>

        <Link to="/offerletter">
          <List>
            <ListItem button style={isActive('/offerletter')}>
              <ListItemText primary="Offer letter" />
            </ListItem>
          </List>
        </Link>

      <Link to="/holiday">
          <List>
            <ListItem button>
              <ListItemText primary="Holiday" />
            </ListItem>
          </List>
        </Link>

        <Link to="/leave">
          <List>
            <ListItem button>
              <ListItemText primary="Leave" />
            </ListItem>
          </List>
        </Link>

        <Link to="/leaverequest">
          <List>
            <ListItem button>
              <ListItemText primary="Leave request" />
            </ListItem>
          </List>
        </Link>



       <ListItem button onClick={handleOpenWorkspace} >
       <ListItemText primary="Work space" />
       {openWorkspaceCollapse ? <ExpandLess  /> : <ExpandMore  />}
      </ListItem>
      <Collapse in={openWorkspaceCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         <Link to="/workspace/article">
          <ListItem button style={isActive('/workspace/article')}>
            <ListItemText primary="All articles" />
          </ListItem>
         </Link>
          <Link to="/workspace/article/write">
           <ListItem button style={isActive('/workspace/article/write')}>
            <ListItemText primary='Write article' />
          </ListItem>
          </Link>

          <Link to="/workspace/article/categories">
           <ListItem button style={isActive('/workspace/article/categories')}>
            <ListItemText primary='Categories' />
          </ListItem>
          </Link>

          <Link to="/workspace/article/tags">
           <ListItem button style={isActive('/workspace/article/tags')}>
            <ListItemText primary='Tags' />
          </ListItem>
          </Link>

        </List>
      </Collapse>

      <Link to="/logs">
        <List>
          <ListItem button style={isActive('/logs')}>
            <ListItemText primary="Logs" />
          </ListItem>
        </List>
      </Link>


      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
         {data}
      </main>
    </div>
  );
}

export default withRouter(PersistentDrawerLeft)
