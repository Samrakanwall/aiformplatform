import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#f5f5f5',
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  marginLeft: theme.spacing(2),
}));

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [area, setArea] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const navigate = useNavigate();

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Save profile logic here
    console.log('Profile saved', {
      firstName, lastName, phoneNumber, address1, address2, postcode, state, area, email, education, country, region
    });
    navigate('/');
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Avatar alt="Edogaru" src="https://st2.depositphotos.com/47577860/46968/v/450/depositphotos_469687788-stock-illustration-account-avatar-man-icon-avatar.jpg" sx={{ width: 120, height: 120 }} />
        <Typography variant="h6" sx={{ mt: 2 }}>Edogaru</Typography>
        <Typography variant="body2" color="textSecondary">edogaru@mail.com.my</Typography>
      </SidebarContainer>
      <FormContainer component="form" onSubmit={handleSaveProfile}>
        <Typography variant="h4" gutterBottom>
          Make Your Profile 
        </Typography>
        <Box display="flex" gap={2}>
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <TextField
          label="Mobile Number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Address Line 1"
          variant="outlined"
          margin="normal"
          fullWidth
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />
        <TextField
          label="Address Line 2"
          variant="outlined"
          margin="normal"
          fullWidth
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
        <TextField
          label="Postcode"
          variant="outlined"
          margin="normal"
          fullWidth
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <TextField
          label="State"
          variant="outlined"
          margin="normal"
          fullWidth
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          label="Area"
          variant="outlined"
          margin="normal"
          fullWidth
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <TextField
          label="Email ID"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Education"
          variant="outlined"
          margin="normal"
          fullWidth
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <Box display="flex" gap={2}>
          <TextField
            label="Country"
            variant="outlined"
            margin="normal"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            label="State/Region"
            variant="outlined"
            margin="normal"
            fullWidth
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, alignSelf: 'center' }}>
          Save Profile
        </Button>
      </FormContainer>
    </ProfileContainer>
  );
};

export default Profile;
