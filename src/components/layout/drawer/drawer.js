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
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({ data }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openWorkspaceCollapse, setOpenWorkspaceCollapse] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function handleOpenWorkspace(){
   setOpenWorkspaceCollapse(!openWorkspaceCollapse);
}



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           Company Name
          </Typography>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {/*<Link to="/profile">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Link>*/}
        <Link to="/dashboard">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </Link>

        <Link to="/projects">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Project" />
            </ListItem>
          </List>
        </Link>

        <Link to="/member">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Member" />
            </ListItem>
          </List>
        </Link>

        <Link to="/department">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Department" />
            </ListItem>
          </List>
        </Link>

        {/*<Link to="/contact">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Link>

        <Link to="/offerletter">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Offer letter" />
            </ListItem>
          </List>
        </Link>

        <Link to="/holiday">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Holiday" />
            </ListItem>
          </List>
        </Link>

        <Link to="/leave">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Leave" />
            </ListItem>
          </List>
        </Link>

        <Link to="/leaverequest">
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Leave request" />
            </ListItem>
          </List>
        </Link>*/}



       <ListItem button onClick={handleOpenWorkspace}>
       <ListItemIcon>
         <InboxIcon />
       </ListItemIcon>
       <ListItemText primary="Work space" />
       {openWorkspaceCollapse ? <ExpandLess  /> : <ExpandMore  />}
      </ListItem>
      <Collapse in={openWorkspaceCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         <Link to="/workspace/article">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Article" />
          </ListItem>
         </Link>
         <Link to="/workspace/article/write">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Write article' />
          </ListItem>
          </Link>
        </List>
      </Collapse>


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
