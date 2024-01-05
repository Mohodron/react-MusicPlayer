import React, { useState, useRef, useEffect } from "react";

function Timeline({ currentSong, handleChange, refero }) {
    const clickRef = useRef();
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const seconds = Math.floor(refero.current.duration);
        setDuration(seconds);
    }
        , [refero.current?.duration]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        if (secs < 60) {
            const seconds = secs < 10? `0${secs}` : `${secs}`;
            return `00:${seconds}`;
        } else {
            const seconds = secs%60;
            const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${returnMinutes}:${returnSeconds}`;
        }
    };
    const handleClick = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const progress = offset / width * 100;
        handleChange(progress / 100 * currentSong.length);
    }

    return (
        <div className="group-2"><div className="div-wrapper">
              <div className="rectangle-3" />
            </div>
            <div className="div-wrapper" onClick={handleClick} ref={clickRef}>
                <div className="rectangle-3" style={{ width: `${currentSong.progress}` + "%" }} />
            </div>
            <div className="text-wrapper-4">{calculateTime(duration)}</div>
            <div className="text-wrapper-5">{calculateTime(Math.floor(refero.current?.currentTime))}</div>
        </div>);
}

export default Timeline;