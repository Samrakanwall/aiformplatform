import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const ProgressContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ProgressLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginRight: theme.spacing(1),
}));

const ProgressBar = ({ label, value, color }) => {
  return (
    <ProgressContainer>
      <Box display="flex" alignItems="center">
        <ProgressLabel>{label}</ProgressLabel>
        <Typography variant="body2" color="textSecondary">{`${value}%`}</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            borderRadius: 5,
            backgroundColor: color,
          },
        }}
      />
    </ProgressContainer>
  );
};

export default ProgressBar;
