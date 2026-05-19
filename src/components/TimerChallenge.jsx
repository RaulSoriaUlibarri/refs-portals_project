import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
};

export default TimerChallenge;
