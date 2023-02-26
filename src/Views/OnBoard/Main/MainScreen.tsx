import DarkModeIcon from "@mui/icons-material/DarkMode";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DataProvider } from "../../../StateManagement/DataProvider";
import { ExtendedThemeContext } from "../../../StateManagement/ExtendedThemeProvider";
import { UserDataProvider } from "../../../StateManagement/UserDataProvider";
import TimeSheet from "../DataFlow/TimeSheet/TimeSheet";
import { UserTable } from "../DataFlow/UserTable/UserTable";
import { InfoPage } from "../Info/InfoScreen";

const drawerWidth = 300;

export default function MainScreen() {
  const { darkMode, setDarkMode } = React.useContext(ExtendedThemeContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "customHeader.primary",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" noWrap component="div">
            <SchoolIcon /> Portofolio
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ position: "absolute", right: "20px", top: "12px" }}
          >
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              <DarkModeIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => navigate("")}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"A little about me"} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton onClick={() => navigate("time-table")}>
                <ListItemIcon>
                  <PendingActionsIcon />
                </ListItemIcon>
                <ListItemText primary={"Timesheet Table"} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton onClick={() => navigate("user-table")}>
                <ListItemIcon>
                  <PendingActionsIcon />
                </ListItemIcon>
                <ListItemText primary={"User Table"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <DataProvider>
          <Routes>
            <Route index element={<InfoPage />} />
            <Route path="time-table" element={<TimeSheet />} />
            <Route path="user-table" element={
             <UserDataProvider>
               <UserTable />
             </UserDataProvider>
            } />
          </Routes>
        </DataProvider>
      </Box>
    </Box>
  );
}
