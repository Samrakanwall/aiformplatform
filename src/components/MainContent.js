import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import CourseDetails from './CourseDetails';
import LoadingModal from './LoadingModal';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainContent = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const email = localStorage.getItem('userEmail');
 

  const navigate = useNavigate();

  const userProfile = {
    name: "Samra Kanwal",
    skills: ["intermediate programming", "data visualization", "statistical analysis"],
    career_goal: "To enhance my skills in machine learning and AI using Python."
  };




  const handleFinish = () => {
    setLoading(true);

    const body = {
      user_profile: userProfile,
      course_details: courseTitle
    };

    fetch('  http://192.168.0.116:5002/generate_outline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);    
        setCourseData(data);
     
       
        setLoading(false);
        setShowCourseDetails(true);
        
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  
  const handleReset = () => {
  
    setLoading(true);
    setTimeout(() => {
       
      setLoading(false);
      setShowCourseDetails(false);
    setCourseTitle('');
    setCourseDescription('');
    setCourseData(null);
    navigate('/details');
    }, 1000); // 2 seconds delay
  };
 

  return (
    <Box display="flex">
      <Sidebar />
      <Box style={{ padding: 20, marginLeft: 250, flexGrow: 1 }}>
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
            courseData={courseData}
            onReset={handleReset}
          />
        )}
      </Box>
    </Box>
  );
};

export default MainContent;

