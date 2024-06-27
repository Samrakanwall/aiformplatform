import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#f5f5f5',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, #3f51b5, #2196f3)',
  color: '#fff',
}));

const Logo = styled('div')({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save email to AsyncStorage
    try {
      await AsyncStorage.setItem('@user_email', email);
      console.log('Email saved');
    } catch (error) {
      console.error('Error saving email:', error);
    }
    // Handle login logic here
    console.log('Login submitted', { email, password });
    // Simulate login success
    setIsAuthenticated(true);
    navigate('/profile');
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Logo>LOGO</Logo>
        <Typography variant="h4" gutterBottom>
          LOGIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Email Address"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Link href="#" variant="body2" sx={{ alignSelf: 'flex-end', marginBottom: 2 }}>
            Forgot your password?
          </Link> */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            LOGIN
          </Button>
        </Box>
      </FormContainer>
      <ImageContainer src="https://img.freepik.com/free-vector/urban-city-background-video-conferencing_23-2148641633.jpg">
        <Box textAlign="center" >
          <Typography variant="h4" gutterBottom>
          AI LEARNING AND DEVELOPMENT PLATFORM
          </Typography>
        </Box>
      </ImageContainer>
    </LoginContainer>
  );
};

export default Login;
