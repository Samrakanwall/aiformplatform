import React from 'react';
import './CourseOutline.css';

const CourseOutline = ({ courseData, onTopicClick }) => {
  return (
    <div className="course-outline">
      <h2>{courseData["Course Title"]}</h2>
      {Object.keys(courseData["Course Outline"]).map((week, index) => (
        <div key={index} className="week-section">
          <h3 className="week-title">{week}</h3>
          <ul className="topics-list">
            {courseData["Course Outline"][week]["Topics"].map((topic, i) => (
              <li key={i} className="topic-item" onClick={() => onTopicClick(topic)}>
                <span className="topic-text">{topic}</span>
                <span className="topic-icon">⚙️</span> {/* Add appropriate icon here */}
              </li>
            ))}
          </ul>
          <button className="add-topic-btn">Add Topic</button>
        </div>
      ))}
    </div>
  );
};

export default CourseOutline;
