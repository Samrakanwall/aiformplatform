import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';

const CourseDetails = ({ courseData, onReset }) => {

  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    // Update the document title using the browser API
     handlePostData();
  });
  if (!courseData) {
    return null;
  }


  const handleFinishget = async () => {
    try {
      const response = await axios.get('http://172.16.172.151:8087/api/Course/75', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("titlelist======>",JSON.parse(response.data.value));

      //setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handlePostData = async () => {
    const data = {

      empId: 1,
      value: JSON.stringify(courseData),
      email: email
     
    };
    console.log("coursedata===",JSON.stringify(courseData));
    try {
      const response = await axios.post('http://172.16.172.151:8087/api/Course', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('=====send data:=====', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <Box>
      <Typography  style={{color:"#0F52BA",fontWeight:"bold"}} variant="h6" component="div">
      Title: 
            </Typography>
      <Typography  variant="h4" component="div" sx={{ marginBottom: 2 }}>
         {courseData['Course Title']}
      </Typography>
      <Typography style={{color:"#0F52BA",fontWeight:"bold"}} variant="h6" component="div">
      Course Overview: 
            </Typography>
      <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
       
       {courseData['Course Overview']}
      </Typography>
      <Typography  style={{color:"#0F52BA",fontWeight:"bold"}} variant="h6" component="div" sx={{ marginBottom: 2 }}>
        Course Duration: {courseData['Course Duration']}
      </Typography>
      <Box>
        {Object.keys(courseData['Course Outline']).map((week, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography  style={{color:"#0F52BA",fontWeight:"bold"}}variant="h6" component="div">
              {week}
            </Typography>
            <Typography variant="body1" component="div">
              {courseData['Course Outline'][week].Topics.map((topic, i) => (
                <div key={i}>{topic}</div>
              ))}
            </Typography>
          </Box>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={onReset}>
       Save & Generate Lessons
      </Button>
    </Box>
  );
};

export default CourseDetails;
