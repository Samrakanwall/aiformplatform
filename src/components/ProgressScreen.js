import React from 'react';
import ProgressBar from './ProgressBar';
import './ProgressScreen.css';
import Certificate from './Certificate';
import { useNavigate } from 'react-router-dom';

const progressData = [
  { heading: 'HTML / HTML5', percentage: 90, color: 'red' },
  { heading: 'ASP.Net', percentage: 50, color: 'green' },
  { heading: 'Java', percentage: 80, color: 'blue' },
  { heading: 'JavaScript / jQuery', percentage: 65, color: 'yellow' },
];



const ProgressScreen = () => {

  const navigate = useNavigate();

  const handleCompleteCourse = () => {
    navigate('/');
  };
  return (
    <div className="progress-screen">
      {progressData.map((data, index) => (
        <ProgressBar
          key={index}
          heading={data.heading}
          percentage={data.percentage}
          color={data.color}
        />
      ))}
            <Certificate name="Firstname Lastname" courseName="Course Name" />

            <button style={{justifyContent:"center"}}className="complete-course-btn" onClick={handleCompleteCourse}>
          Create New Course
        </button>

    </div>
  );
};

export default ProgressScreen;
