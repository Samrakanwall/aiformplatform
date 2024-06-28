import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ heading, percentage, color }) => {
  return (
    <div className="progress-bar-container">
      <label>{`${heading} - ${percentage}%`}</label>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        >
          <div className="progress-thumb" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
