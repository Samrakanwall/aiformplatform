import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import Sidebar from './Sidebar';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';
import './DetailScreen.css'; // Import the CSS file for styling

const DetailScreen = () => {
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds for demo
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      navigate('/');
    }
  }, [timeLeft, navigate]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box style={{ padding: 20, marginLeft: 250, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Key Marketing Challenges for E-Learning Courses
        </Typography>
        <Typography variant="body1" paragraph>
          While e-learning offers many advantages over traditional classroom-based learning, it also presents a unique set of marketing challenges. Here are some of the key challenges that e-learning course designers and marketers need to overcome:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Competition:</strong> With the growing popularity of e-learning, the market is becoming increasingly crowded. This means that course designers need to find ways to differentiate their courses and stand out from the competition.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Perceived value:</strong> Many learners still believe that traditional classroom-based learning offers more value than e-learning, despite the numerous benefits of e-learning. Course designers need to find ways to communicate the value of e-learning and convince learners that it is a worthwhile investment.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Technical issues:</strong> E-learning courses often require learners to have access to specific software or hardware. This can be a barrier for some learners, particularly those who are not tech-savvy. Course designers need to ensure that their courses are accessible to as many learners as possible.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Retention:</strong> E-learning courses can be more challenging for learners to complete than traditional classroom-based courses. Course designers need to find ways to keep learners engaged and motivated throughout the course to ensure that they complete it successfully.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Marketing channels:</strong> E-learning courses are marketed differently than traditional classroom-based courses. Course designers need to find the most effective marketing channels for reaching their target audience.
        </Typography>
        <Box mt={4}>
          <ProgressBar label="HTML / HTML5" value={60} color="#2196f3" />
          <ProgressBar label="ASP.Net" value={40} color="#4caf50" />
          <ProgressBar label="Java" value={20} color="#03a9f4" />
          <ProgressBar label="JavaScript / jQuery" value={60} color="#ff9800" />
        </Box>
        <Box mt={4} textAlign="center" className="timer-container">
          <Typography variant="h4" className="timer">
            {formatTime(timeLeft)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailScreen;
