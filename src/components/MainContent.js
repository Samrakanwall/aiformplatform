import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import CourseDetails from './CourseDetails';
import Header from './Header';
import LoadingModal from './LoadingModal';

const MainContent = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCourseDetails(true);
    }, 3000); // Show modal for 3 seconds
  };

  const handleReset = () => {
    setShowCourseDetails(false);
    setCourseTitle('');
    setCourseDescription('');
  };

  return (
    <Box style={{ padding: 20 }}>
      <Header />
      <LoadingModal open={loading} />
      {!showCourseDetails ? (
        <Box component="form" noValidate autoComplete="off" style={{ marginTop: 20 }}>
          <TextField
            label="Course Title"
            placeholder="Enter course title"
            fullWidth
            margin="normal"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
          <TextField
            label="Course Description"
            placeholder="Enter course description"
            fullWidth
            margin="normal"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={handleFinish}
            disabled={!courseTitle || !courseDescription} // Disable button if inputs are empty
          >
            Finish
          </Button>
        </Box>
      ) : (
        <CourseDetails
          title={courseTitle}
          description={courseDescription}
          onReset={handleReset}
        />
      )}
    </Box>
  );
};

export default MainContent;
