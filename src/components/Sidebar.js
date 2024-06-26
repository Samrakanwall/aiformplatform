import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, Home, Book, Drafts, AddBox, Assignment } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const SidebarContainer = styled('div')({
  width: 250,
  padding: 20,
  backgroundColor: '#e3f2fd', // Light blue background
  height: '100vh',
});

const Header = styled('div')({
  textAlign: 'center',
  marginBottom: 20,
  backgroundColor: '#90caf9', // Blue background for header
  padding: 10,
  borderRadius: 10,
});

const StyledAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  marginBottom: 10,
});

const listItemStyles = {
  color: '#0d47a1', // Dark blue text color
};

const nestedListItemStyles = {
  paddingLeft: 32, // Corresponding to theme.spacing(4)
  color: '#0d47a1', // Dark blue text color
};

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <SidebarContainer>
      <Header>
        <StyledAvatar  style={{alignItems:"center",alignSelf:"center", marginLeft:"85px",marginTop:"20px"}}alt="Alex Hey" src="https://w7.pngwing.com/pngs/306/138/png-transparent-smiling-man-wearing-black-notched-lapel-blazer-businessman-image-file-formats-people-necktie.png" />
        <h3>Alex Hey</h3>
      </Header>
      <List>
        <ListItem button component={Link} to="/" sx={listItemStyles}>
          <ListItemIcon>
            <Home style={{ color: '#0d47a1' }} />
          </ListItemIcon>
          <ListItemText primary="Create Courses" />
        </ListItem>
     
       
      </List>
      <Divider />
      <List>
     
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
