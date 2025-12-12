import React, { useRef, useState } from "react";

function Card() {
  const [stopTime, setStopTime] = useState();
  const [remainingHour, setRemainingHour] = useState();
  const [remainingMin, setRemainingMin] = useState();
  const allottedTime = useRef(null);
  const startTime = useRef(null);

  function timerStart() {
    const timeLimit = +allottedTime.current.value;
    let start = startTime.current.value;

    const hourLimit = +start.slice(0, start.indexOf(":"));
    const minuteLimit = +start.slice(start.indexOf(":") + 1);

    const allottHour = Math.floor(timeLimit / 60);
    const allottMinute = Math.floor(timeLimit % 60);

    let timeRemainHour = allottHour + hourLimit;
    let timeRemainMin = allottMinute + minuteLimit;

    if (timeRemainMin >= 60) {
      timeRemainHour++;
      timeRemainMin = timeRemainMin - 60;
    }

    timeRemainHour = timeRemainHour % 12 || 12;
    setRemainingHour(timeRemainHour);
    setRemainingMin(timeRemainMin);
    setStopTime(timeRemainHour + ":" + timeRemainMin);
  }

  function resetTimer() {
    setStopTime();
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function formatTime() {
    if (stopTime == undefined) {
      return `Stop Time 00:00`;
    } else {
      return `Stop Time ${padZero(remainingHour)}:${padZero(remainingMin)}`;
    }
  }

  return (
    <div className="card">
      <div className="timeInfo">
        <div className="timeBlock">
          <form>
            <label htmlFor="allottedValue">Allotted Time</label>
            <input
              ref={allottedTime}
              type="text"
              name="allottedValue"
              maxLength="3"
            />
          </form>
        </div>
        <div className="timeBlock">
          <form>
            <label htmlFor="startValue">Start Time</label>
            <input
              ref={startTime}
              type="text"
              name="startValue"
              maxLength="5"
            />
          </form>
        </div>
      </div>
      <div>
        <div className="display">{formatTime()}</div>
      </div>
      <div className="controls">
        <button onClick={timerStart} className="start button">
          Start
        </button>
        <button className="stop button">Stop</button>
        <button onClick={resetTimer} className="reset button">
          Reset
        </button>
      </div>
    </div>
  );
}
export default Card;
