// import React from 'react';
// import { Dialog, DialogContent, Typography, Box } from '@mui/material';
// // Ensure you have an image named robot.png in your project

// const LoadingModal = ({ open }) => {
//   return (
//     <Dialog open={open}>
//       <DialogContent style={{ textAlign: 'center' }}>
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <img src="https://img.freepik.com/premium-vector/robot-icon-vector-image-can-be-used-children-toys_120816-150375.jpg" alt="Loading" style={{ width: '150px', marginBottom: '20px' }} />
//           <Typography variant="h6">Our AI is writing your high-level design...</Typography>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default LoadingModal;

import React from 'react';
import { Dialog, DialogContent, Typography, Box } from '@mui/material';
import Lottie from 'lottie-react';
import loadingAnimation from '../assest/robo.json'; // Ensure you have a Lottie animation JSON file named loadingAnimation.json in your project

const LoadingModal = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogContent style={{ textAlign: 'center' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6">Our AI is writing your high-level design.........!</Typography>
          <Lottie animationData={loadingAnimation} style={{ width: '250px',height:"250px", marginBottom: '20px' }} />
          <Typography variant="h8">We are writing all your page content in the background your content should be availabel fter 10-15 minutes.....</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;





