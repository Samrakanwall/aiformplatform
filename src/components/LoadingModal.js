import React from 'react';
import { Dialog, DialogContent, Typography, Box } from '@mui/material';
// Ensure you have an image named robot.png in your project

const LoadingModal = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogContent style={{ textAlign: 'center' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src="https://img.freepik.com/premium-vector/robot-icon-vector-image-can-be-used-children-toys_120816-150375.jpg" alt="Loading" style={{ width: '150px', marginBottom: '20px' }} />
          <Typography variant="h6">Our AI is writing your high-level design...</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
