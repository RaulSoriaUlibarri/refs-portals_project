import { useState, useRef } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>'You Lost'</p>}
      <p className="challenge-time">
        {targetTime} second{title > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running..." : "Time inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
