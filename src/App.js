import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainContent from './components/MainContent';
import WeekDetails from './components/WeekDetails';

import Login from './components/Login';
import Profile from './components/Profile';
import Header from './components/Header';
import DetailScreen from './components/DetailScreen';

const App = () => {
  const [courseData, setCourseData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setCourseDetails = (data) => {
    setCourseData(data);
  };

  return (
    <Router>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/" element={isAuthenticated ? <MainContent setCourseData={setCourseDetails} /> : <Navigate to="/login" />} />
        <Route path="/week/:week" element={isAuthenticated ? <WeekDetails courseData={courseData} /> : <Navigate to="/login" />} />
        <Route path="/details" element={isAuthenticated ? <DetailScreen /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
