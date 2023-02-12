import React from 'react';
import { useState, useEffect } from 'react';

export default function Stopwatch({ stopwatchRunning }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval;
        if (stopwatchRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else if (!stopwatchRunning) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [stopwatchRunning]);

    return (
        <div className="stopwatch">
            <span>{('0' + Math.floor((time / 60) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor(time % 60)).slice(-2)}</span>
        </div>
    );
}
