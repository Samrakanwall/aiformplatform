import React, { useState } from 'react';
import CourseOutline from './CourseOutline';
import TopicDetail from './TopicDetail';
import LoadingModal from './LoadingModal';

const MainContent = () => {
  const [loading, setLoading] = useState(false);
  const [courseData] = useState({
    "Course Title": "Advanced Python Programming for Machine Learning and AI",
    "Course Outline": {
      "Week 1": {
        "Title": "",
        "Topics": [
          "- Introduction to Advanced Python Concepts",
          "- Object-Oriented Programming in Python",
          "- Decorators and Generators",
          "- Application of Advanced Python Concepts in Data Analysis"
        ]
      },
      "Week 2": {
        "Title": "",
        "Topics": [
          "- Python Libraries for Data Manipulation and Analysis",
          "- NumPy and Pandas for Data handling",
          "- Data Visualization in Python",
          "- Matplotlib and Seaborn"
        ]
      },
      "Week 3": {
        "Title": "",
        "Topics": [
          "- Introduction to Machine Learning with Python",
          "- Scikit-learn library and its functionalities",
          "- Implementing Regression Algorithms in Python"
        ]
      },
      "Week 4": {
        "Title": "",
        "Topics": [
          "- Implementing Classification Algorithms in Python",
          "- Model Evaluation and Cross-Validation Techniques in Machine Learning"
        ]
      },
      "Week 5": {
        "Title": "",
        "Topics": [
          "- Introduction to Artificial Intelligence",
          "- Building Neural Networks using Python and TensorFlow"
        ]
      },
      "Week 6": {
        "Title": "",
        "Topics": [
          "- Advanced Topics in AI: Natural Language Processing and Computer Vision",
          "- Real-world Applications and Case Studies in Machine Learning and AI"
        ]
      },
      "Week 7": {
        "Title": "",
        "Topics": [
          "- Final Project: Applying Machine Learning and AI techniques to a real-world dataset using Python",
          "- Presentation of Final Project and Feedback Session",
          "This course is designed to build upon your existing programming skills and familiarity with data analysis and visualization. It will equip you with the necessary tools and knowledge to excel in the field of Machine Learning and Artificial Intelligence using Python."
        ]
      }
    }
  });

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = async (topic) => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.0.116:5002/generate-topic-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ topic })
      });
      const data = await response.json();
      console.log('selecttopicdetails===>:', data);  
      setSelectedTopic(data);  
        setLoading(false);
     
    } catch (error) {
      console.error('Error fetching topic details:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '25%', padding: '10px' }}>
      <LoadingModal open={loading} />
        <CourseOutline courseData={courseData} onTopicClick={handleTopicClick} />
      </div>
      <div style={{ width: '75%', padding: '10px' }}>
        {selectedTopic ? (
          <TopicDetail detail={selectedTopic} />
        ) : (
          <p>Select a topic to see details</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
