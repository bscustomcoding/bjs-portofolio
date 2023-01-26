import * as React from 'react';
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import { TheemeContext } from '../../../StateManagement/ThemeProvider';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { InfoPage } from '../Info/InfoScreen';
import TimeSheet from '../DataFlow/TimeSheet/TimeSheet';
import { DataProvider } from '../../../StateManagement/DataProvider';


const drawerWidth = '30vw';

export default function MainScreen() {
  const {themePalette, darkMode, setDarkMode } = React.useContext(TheemeContext);
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex', bgcolor: themePalette.palette.background.primary }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: themePalette.palette.header.background  }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" noWrap component="div">
          <SchoolIcon />  Bjs Portofolio 
          </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ position: 'absolute', right: '20px', top: '20px'}}>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              <DarkModeIcon style={{color: themePalette.palette.text.primary }} /> 
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', height: '90vh' }} style={{ backgroundColor: themePalette.palette.sideNav.background }}>
          <List >
              <ListItem  disablePadding>
                <ListItemButton onClick={() => navigate("")}>
                  <ListItemIcon>
                    <PersonIcon style={{color: themePalette.palette.text.primary }} />
                  </ListItemIcon>
                  <ListItemText primary={"A little about me"} style={{color: themePalette.palette.text.primary }}/>
                </ListItemButton>
              </ListItem>
              <Divider style={{backgroundColor: themePalette.palette.divider.primary }} />
              <ListItem  disablePadding>
                <ListItemButton onClick={() => navigate("time-sheet")}>
                  <ListItemIcon>
                    <PendingActionsIcon style={{color: themePalette.palette.text.primary }}/>
                  </ListItemIcon>
                  <ListItemText primary={"TimeSheet"} style={{color: themePalette.palette.text.primary }}/>
                </ListItemButton>
              </ListItem>
          </List>
          <Divider style={{backgroundColor: themePalette.palette.divider.primary}}  />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh', bgcolor: themePalette.palette.background }}>
        <Toolbar style={{color: themePalette.palette.text.primary }}/>
        <DataProvider>
        <Routes>
          <Route
            index
            element={
                <InfoPage />
            }
          />
          <Route
            path="time-sheet"
            element={<TimeSheet />}
         />
    </Routes>
    </DataProvider>
      </Box>
    </Box>
  );
}

