import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { theme } from '../../../GlobalStyles/Theme';


const drawerWidth = 240;

export default function MainScreen() {
  return (
    
    <Box sx={{ display: 'flex', bgcolor: theme.palette.background.primary }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: theme.palette.header.background  }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <SchoolIcon />  Bjs Portofolio 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          bgcolor: theme.palette.sideNav.background,
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={"A little about me"} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PendingActionsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"TimeSheet"} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh', bgcolor: theme.palette.background }}>
        <Toolbar />
        <Typography paragraph sx={{color: theme.palette.text.primary}}>
          Velcome to my Portofolio 
        </Typography>
        <Typography paragraph sx={{color: theme.palette.text.primary}}>
          This is a application for sharing React/Typescript programming
        </Typography>
      </Box>
    </Box>
  );
}