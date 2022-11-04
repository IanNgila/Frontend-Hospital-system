// import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
// import {MdLocalPharmacy} from 'react-icons/md'
// import "../Nav/Nav.css";
// import { useNavigate } from "react-router-dom";
// import "react-calendar/dist/Calendar.css";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink } from "react-router-dom";

// const Nav = ({ setUser, user }) => {
//   console.log(user)
//   const navigate = useNavigate()
  // const onHandleLogoutClick = () => {
  //   fetch("/users/signout", {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       user && setUser(null);
  //       alert("successfully logged out");
  //       navigate("/");
  //     }
  //   });
  // };

//   return (

//           <CDBSidebar textColor="black" backgroundColor="#E9E6E9">
//             <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//               <p>Main Navigation</p>
//             </CDBSidebarHeader>
//             <CDBSidebarContent className="sidebar-content">
//               <CDBSidebarMenu>
            //   <NavLink exact to="/admin" activeClassName="activeClicked">
            //       <CDBSidebarMenuItem icon="columns">
            //         <p>Admin</p>
            //       </CDBSidebarMenuItem>{" "}
            //       <br></br>
            //     </NavLink>
//                 <NavLink exact to="/pharmacy" activeClassName="activeClicked">
//                   <CDBSidebarMenuItem icon="columns">
//                      <p>Pharmacy</p>
//                   </CDBSidebarMenuItem>{" "}
//                   <br></br>
//                 </NavLink>
//                 <NavLink exact to="/doctor" activeClassName="activeClicked">
//                   <CDBSidebarMenuItem icon="columns">
//                     <p>Doctor</p>
//                   </CDBSidebarMenuItem>
//                   <br></br>
//                 </NavLink>
//                 <NavLink exact to="/registrar" activeClassName="activeClicked">
//                   <CDBSidebarMenuItem icon="columns">
//                     <p>Registrar</p>
//                   </CDBSidebarMenuItem>
//                   <br></br>
//                 </NavLink>
//                 <NavLink exact to="/patient" activeClassName="activeClicked">
//                   <CDBSidebarMenuItem icon="columns">
//                     <p>Shift</p>
//                   </CDBSidebarMenuItem>
//                   <br></br>
//                 </NavLink>
//                 <NavLink exact to="/laboratory" activeClassName="activeClicked">
//                   <CDBSidebarMenuItem icon="columns">
//                     <p>Laboratory</p>
//                   </CDBSidebarMenuItem>
//                   <br></br>
//                 </NavLink>
//                 <button onClick={onHandleLogoutClick}>Logout</button>
//               </CDBSidebarMenu>
//             </CDBSidebarContent>
//           </CDBSidebar>


//   );
// };
// export default Nav;

//=======MUI Starts here=============

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ManIcon from '@mui/icons-material/Man';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { NavLink, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({ setUser, user }) {
  const navigate = useNavigate()

// ==============================================

const onHandleLogoutClick = () => {
  fetch("/users/signout", {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      user && setUser(null);
      alert("successfully logged out");
      navigate("/");
    }
  });
};
// ==========================================

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/">Main Navigation</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <p>Admin</p>
            </NavLink>,
            <NavLink exact to="/pharmacy" activeClassName="activeClicked">
              <p>Pharmacy</p>
            </NavLink>,
            <NavLink exact to="/doctor" activeClassName="activeClicked">
              <p>Doctor</p>
            </NavLink>,

            <NavLink exact to="/registrar" activeClassName="activeClicked">
              <p>Registrar</p>
            </NavLink>,
            <NavLink exact to="/patient" activeClassName="activeClicked">
              <p>Shift</p>
            </NavLink>,

            <NavLink exact to="/laboratory" activeClassName="activeClicked">
              <p>Laboratory</p>
            </NavLink>,
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <ManIcon /> : <ScienceOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          
          <LogoutIcon onClick={onHandleLogoutClick} />
          <Divider />
          {/* <button>Logout</button> */}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}


//=======MUI Ends here=====================
