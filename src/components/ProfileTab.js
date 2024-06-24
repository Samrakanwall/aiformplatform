import React, { useState } from 'react';
import { Box, Typography, TextField, Avatar, Button } from '@mui/material';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileTab = () => {
  const [profileData, setProfileData] = useState({
    username: 'untitledui.com/olivia',
    website: 'http://www.untitledui.com',
    bio: "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.",
    jobTitle: 'Product Designer',
    email: 'example@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      console.log("======>",'Profile data saved');
    } catch (error) {
      console.error('Failed to save profile data', error);
    }
  };

  const handleDelete = () => {
    console.log('Profile picture deleted');
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>Profile</Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        name="username"
        value={profileData.username}
        onChange={handleChange}
      />
      <TextField
        label="Website"
        fullWidth
        margin="normal"
        name="website"
        value={profileData.website}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Avatar alt="Olivia Rhye" src="https://via.placeholder.com/100" sx={{ width: 100, height: 100 }} />
        <Box sx={{ ml: 2 }}>
          <Button variant="outlined" onClick={handleDelete}>Delete</Button>
          <Button variant="contained" sx={{ ml: 1 }} onClick={handleUpdate}>Update</Button>
        </Box>
      </Box>
      <TextField
        label="Your bio"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        name="bio"
        value={profileData.bio}
        onChange={handleChange}
      />
      <TextField
        label="Job title"
        fullWidth
        margin="normal"
        name="jobTitle"
        value={profileData.jobTitle}
        onChange={handleChange}
      />
      <TextField
        label="Alternative contact email"
        fullWidth
        margin="normal"
        name="email"
        value={profileData.email}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleUpdate}>Save</Button>
      </Box>
    </Box>
  );
};

export default ProfileTab;
