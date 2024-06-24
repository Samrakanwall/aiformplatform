import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Box, CircularProgress } from '@mui/material';
import { Home, Dashboard, Folder, Task, BarChart, People, Settings, Support } from '@mui/icons-material';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" noWrap>
            Untitled UI
          </Typography>
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Folder /></ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Task /></ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BarChart /></ListItemIcon>
            <ListItemText primary="Reporting" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><People /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Support /></ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ padding: 2 }}>
          <CircularProgress variant="determinate" value={80} />
          <Typography variant="caption" display="block">
            Used space
          </Typography>
          <Typography variant="body2">
            Your team has used 80% of your available space. Need more?
          </Typography>
        </Box>
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Olivia Rhye" src="https://via.placeholder.com/40" />
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="body1">Olivia Rhye</Typography>
            <Typography variant="body2">olivia@untitledui.com</Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
