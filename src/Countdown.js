import React, { useState, useEffect } from 'react';

function Countdown({ countdownTime }) {
  const [remainingTime, setRemainingTime] = useState(countdownTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Countdown: {remainingTime}</h1>
    </div>
  );
}

export default Countdown;
