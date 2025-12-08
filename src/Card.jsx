import React, { useRef, useState, useEffect } from "react";

function Card() {

  const [stopTime, setStopTime] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0)
  const allottedTime = useRef(null);
  const startTime = useRef(null);


  function timerStart() {

    const timeLimit = +allottedTime.current.value;
    let start = startTime.current.value;

    const hourLimit = +start.slice(0, start.indexOf(":"));
    const minuteLimit = +start.slice(start.indexOf(":") +1)

    const allottHour = Math.floor(timeLimit / 60);
    const allottMinute = Math.floor(timeLimit %60);

    let timeRemainHour = allottHour + hourLimit; 
    const timeRemainMin = allottMinute + minuteLimit;

    timeRemainHour = timeRemainHour % 12 || 12;
  
    setStopTime(timeRemainHour + ":" + timeRemainMin)
  }

  function formatTime() {
    if (stopTime == undefined) {
      return `00:00`
    } else {
      return `${stopTime}`
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
        <button className="stop button">
          Stop
        </button>
        <button className="reset button">
          Reset
        </button>
      </div>
    </div>
  );
}
export default Card;
