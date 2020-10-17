import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse'
import {Link,withRouter} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

const Sidebar = ({ data, match }) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [openWorkspaceCollapse, setOpenWorkspaceCollapse] = useState(false);
  const [openEmployeesCollapse, setOpenEmployeesCollapse] = useState(false);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenWorkspace = () =>{
   setOpenWorkspaceCollapse(!openWorkspaceCollapse);
}

  const handleOpenEmployees = () =>{
   setOpenEmployeesCollapse(!openEmployeesCollapse);
  }

const isActive = (path) => {
  if(match.path === path){
    return { backgroundColor: '#e0e0e0', color:""}
  }
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
            className={clsx(classes.menuButton, {
              // [classes.hide]: open,
            })}
          >
            <MenuIcon className="appIcons"/>
          </IconButton>
          <div className={classes.grow} />
          <div>
          <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                          <MessageOutlinedIcon className="appIcons"/>
                        </Badge>
                      </IconButton>
                      <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                          <NotificationsOutlinedIcon className="appIcons"/>
                        </Badge>
                      </IconButton>
                      <IconButton
                      size="medium"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                      >
                        <AccountCircle className="appIcons"/>
                      </IconButton>
                    </div>


        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/dashboard">
            <ListItem button key={1}>
              <ListItemIcon><i className="la la-dashboard sb-icons"></i></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>



            <ListItem button onClick={handleOpenEmployees} >
            <ListItemIcon><i className="la la-user sb-icons"></i></ListItemIcon>
            <ListItemText primary="Employees" />
              {openEmployeesCollapse ? <ExpandLess  /> : <ExpandMore  />}
              </ListItem>
              <Collapse in={openEmployeesCollapse} timeout="auto" unmountOnExit>
                <div className="collapseContainer">
                   <List component="div" disablePadding>
                      <Link to="/all-employees">
                      <ListItem button style={isActive('/all-employees')}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="All Employees" />
                      </ListItem>
                      </Link>
                      <Link to="">
                      <ListItem button style={isActive('')}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary='Holidays' />
                      </ListItem>
                      </Link>
                      <Link to="">
                      <ListItem button style={isActive('')}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary='Leave Request' />
                      </ListItem>
                      </Link>
                      <Link to="/departments">
                      <ListItem button style={isActive('')}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary='Department' />
                      </ListItem>
                      </Link>
                      <Link to="/designations">
                      <ListItem button style={isActive('')}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary='Designation' />
                      </ListItem>
                      </Link>
                   </List>
               </div>
              </Collapse>



        <Link to="/products">
          <ListItem button key={1}>
            <ListItemIcon><i className="la la-rocket sb-icons"></i></ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>

         <Link to="/task">
          <ListItem button key={1} style={isActive('/task')}>
            <ListItemIcon><i className="la la-tasks sb-icons"></i></ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
         </Link>

         <Link to="/contact">
          <ListItem button key={1}>
            <ListItemIcon><i className="la la-book sb-icons"></i></ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItem>
         </Link>

          <ListItem button key={1}>
            <ListItemIcon><i className="la la-money sb-icons"></i></ListItemIcon>
            <ListItemText primary="Payroll" />
          </ListItem>

          <ListItem button key={1}>
            <ListItemIcon><i className="la la-calendar sb-icons"></i></ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>

          <ListItem button key={1}>
            <ListItemIcon><i className="la la-comments sb-icons"></i></ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItem>


          <ListItem button onClick={handleOpenWorkspace} >
            <ListItemIcon><i className="la la-clipboard-list sb-icons"></i></ListItemIcon>
            <ListItemText primary="Work space" />
            {openWorkspaceCollapse ? <ExpandLess  /> : <ExpandMore  />}
            </ListItem>
            <Collapse in={openWorkspaceCollapse} timeout="auto" unmountOnExit>
              <div className="collapseContainer">
                 <List component="div" disablePadding>
                    <Link to="/workspace/article">
                    <ListItem button style={isActive('/workspace/article')}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="All articles" />
                    </ListItem>
                    </Link>
                    <Link to="/workspace/article/write">
                    <ListItem button style={isActive('/workspace/article/write')}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary='Write' />
                    </ListItem>
                    </Link>
                    <Link to="/workspace/article/categories">
                    <ListItem button style={isActive('/workspace/article/categories')}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary='Categories' />
                    </ListItem>
                    </Link>
                    <Link to="/workspace/article/tags">
                    <ListItem button style={isActive('/workspace/article/tags')}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary='Tags' />
                    </ListItem>
                    </Link>
                 </List>
             </div>
            </Collapse>


          <ListItem button key={1}>
            <ListItemIcon><i className="la la-bell sb-icons"></i></ListItemIcon>
            <ListItemText primary="Activities" />
          </ListItem>

          <ListItem button key={1}>
            <ListItemIcon><i className="la la-cog sb-icons"></i></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>


      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         {data}
      </main>
    </div>
  );
}

export default withRouter(Sidebar)
