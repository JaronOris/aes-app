// import React, { useState, useEffect, useRef } from "react";
//
// const [isRunning, setIsRunning] = useState(false);
// const [allottedTime, setAllottedTime] = useState(0);
// const [startingTime, setStartingtime] = useState(0);
// const intervalIdRef = useRef(null);
// const startTimeRef = useRef(0);
//
// useEffect(() => {
//
// }, [isRunning]);
//
// function handleInputChange(event) {
//   setAllottedTime(event.target.value)
// };
//
// function getAllotted() { };
//
// function startingValue() { };
//
// function start() {
//   console.log(allottedTime)
// };
//
// function stop() { };
//
// function reset() { };
//
function formatTime() {
  return `00:00:00`;
}

function Card() {
  return (
    <div className="card">
      <div className="timeInfo">
        <div className="timeBlock">
          <form>
            <label for="allottedValue">Allotted Time</label>
            <input
              type="text"
              name="allottedValue"
              maxlength="8"
              value=""
              onChange=""
            />
          </form>
        </div>
        <div className="timeBlock">
          <form>
            <label for="startValue">Start Time</label>
            <input
              type="text"
              name="startValue"
              maxlength="8"
              value=""
              onChange=""
            />
          </form>
        </div>
      </div>
      <div>
        <div className="display">{formatTime()}</div>
      </div>
      <div className="controls">
        <button onClick="" className="start button">
          Start
        </button>
        <button onClick="" className="stop button">
          Stop
        </button>
        <button onClick="" className="reset button">
          Reset
        </button>
      </div>
    </div>
  );
}
export default Card;
