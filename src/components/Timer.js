import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onComplete]);

  const formatTime = () => {
    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

  return (
    <div className="timer-container">
      <div className="timer-box">
        <span  className="timer-text">{String(days).padStart(2, '0')}</span> Days{' '}
        <span className="timer-text">{String(hours).padStart(2, '0')}</span> Hrs{' '}
        <span className="timer-text">{String(minutes).padStart(2, '0')}</span> Mins{' '}
        <span className="timer-text">{String(seconds).padStart(2, '0')}</span> Secs
      </div>
    </div>
  );
};

export default Timer;



