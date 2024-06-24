import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, TextField } from '@mui/material';
import ProfileTab from './ProfileTab';

const Content = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <AppBar position="static" color="default" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Settings
          </Typography>
          <TextField size="small" placeholder="Search" sx={{ marginRight: 2 }} />
        </Toolbar>
        <Tabs value={value} onChange={handleChange} aria-label="settings tabs">
          <Tab label="My details" />
          <Tab label="Profile" />
          <Tab label="Password" />
          <Tab label="Team" />
          <Tab label="Plans" />
          <Tab label="Billing" />
          <Tab label="Email" />
          <Tab label="Notifications" />
          <Tab label="Integrations" />
          <Tab label="API" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabPanel value={value} index={0}>My details content</TabPanel>}
      {value === 1 && <ProfileTab />}
      {value === 2 && <TabPanel value={value} index={2}>Password content</TabPanel>}
      {value === 3 && <TabPanel value={value} index={3}>Team content</TabPanel>}
      {value === 4 && <TabPanel value={value} index={4}>Plans content</TabPanel>}
      {value === 5 && <TabPanel value={value} index={5}>Billing content</TabPanel>}
      {value === 6 && <TabPanel value={value} index={6}>Email content</TabPanel>}
      {value === 7 && <TabPanel value={value} index={7}>Notifications content</TabPanel>}
      {value === 8 && <TabPanel value={value} index={8}>Integrations content</TabPanel>}
      {value === 9 && <TabPanel value={value} index={9}>API content</TabPanel>}
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default Content;
