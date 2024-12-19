import React, { useRef, useState } from 'react'

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);
    const formatTime = (seconds) => {
        let hours = parseInt(seconds/3600);
        seconds = seconds%3600;
        let minutes = parseInt(seconds/60);
        seconds= seconds%60;

        return `${hours<=9 ? "0"+hours : hours}:${minutes<=9 ? "0"+minutes : minutes}:${seconds<=9 ? "0"+seconds : seconds}`;
    }

    const startTimer = () => {
        if(!isRunning){
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setSeconds(prevSec => prevSec+1);
            },1000)
        }
    }

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
    }

    const resetTimer = () => {
        setSeconds(0);
        setIsRunning(false);
        clearInterval(timerRef.current);
    }
  return (
    <div>
        <h1>{formatTime(seconds)}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Stopwatch

//usecallback can be used and useMemo for further optimizations