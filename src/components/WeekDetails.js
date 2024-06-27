import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const WeekDetails = ({ courseData }) => {
  const { week } = useParams();

  if (!courseData || !courseData['Course Outline'] || !courseData['Course Outline'][week]) {
    return <Typography variant="h6">No details available for this week.</Typography>;
  }

  const weekData = courseData['Course Outline'][week];

  return (
    <Box display="flex" p={2}>
      <Box flex={1} mr={2}>
        {Object.keys(courseData['Course Outline']).map((weekKey, index) => (
          <Typography key={index} variant="body1">
            {weekKey}
          </Typography>
        ))}
      </Box>
      <Box flex={3}>
        <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
          {week}
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          {weekData.Title}
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
          {weekData.Topics.map((topic, index) => (
            <div key={index}>{topic}</div>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default WeekDetails;
