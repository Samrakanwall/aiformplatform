import React from 'react';
import Timer from './Timer';
import './TopicDetail.css';
import { useNavigate } from 'react-router-dom';

const TopicDetail = ({ detail }) => {
  const navigate = useNavigate();
  const handleTimerComplete = () => {
    console.log('Timer completed!');
    // Add your logic here to move to the next topic or show a modal
  };

  const handleCompleteCourse = () => {
    navigate('/progress');
  };

  return (
    <div>
      <Timer duration={3600} onComplete={handleTimerComplete} />
      <h2>Topic Detail</h2>
      <p>{detail}</p>
      <button className="complete-course-btn" onClick={handleCompleteCourse}>
          Complete Course
        </button>
    </div>
  );
};

export default TopicDetail;




// import React from 'react';
// import Timer from './Timer';

// const TopicDetail = ({ detail, onTimerComplete }) => {
//   const { definition, explanation, examples, practiceQuestions } = detail;

//   return (
//     <div>
//       <Timer duration={10} onComplete={onTimerComplete} />
//       <h2>Topic Detail</h2>
//       <h3>Definition</h3>
//       <p>{definition}</p>
//       <h3>Explanation</h3>
//       <p>{explanation}</p>
//       <h3>Examples</h3>
//       <pre>{examples}</pre>
//       <h3>Practice Questions</h3>
//       <ol>
//         {practiceQuestions.map((question, index) => (
//           <li key={index}>{question}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default TopicDetail;

