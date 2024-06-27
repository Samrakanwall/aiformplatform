import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CourseDetails = ({ courseData, onReset }) => {
  if (!courseData) {
    return null;
  }

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
