import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1  , alignContent: 'center', alignSelf:"center",justifyContent:"center", marginLeft:"400px"}}>
          AI Development And Learning Platform
        </Typography>
      
      </Toolbar>
    </AppBar>
  );
};

export default Header;
