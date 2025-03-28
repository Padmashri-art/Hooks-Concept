"use client";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [run, setRun] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let time = 0;
    if (run) {
      time = setTime(() => {
        setSecond((prev) => prev + 1);
      });
    }
  });

  function format(time) {
    const hour = (time / 3600) | 0;
    const mins = ((time % 3600) / 60) | 0;
    const seconds = time % 60 | 0;
    return `${hour}:${mins}:${seconds}`;
  }

  const start = () => {
    setRun(true);
  };
  const stop = () => {
    setRun(false);
  };
  const reset = () => {
    setRun(false);
    setSecond(0);
  };
  return (
    <div>
      <div>
        <b>Timer</b>
        <div>
          <label>{format(second)}</label>
        </div>
        <div className="buttons">
          <div>
            <button className="button" onClick={start}>
              Start
            </button>
          </div>
          <div>
            <button className="button" onClick={stop}>
              Stop
            </button>
          </div>
          <div>
            <button className="button" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
