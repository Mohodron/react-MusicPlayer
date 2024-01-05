import React, { useState, useRef } from "react";
import "./style.css";
import Top from "./Top";
import Text from "./Text";
import PlayPause from "./PlayPause";
import Timeline from "./Timeline";
import Volume from "./Volume";
import { audioData } from "./Audios";


function App() {
    const [currentSong, setCurrentSong] = useState(audioData[0]);
    const [muted, setmuted] = useState(false);
    const [isBeingLooped, setIsBeingLooped] = useState(true);
    const [play, setPlay] = useState(true);

    function handlePrevious(val) {
        if (val) {
            setAudio(prevValue => {
                return prevValue++;
            });
        }
    }
    const ref = useRef();

    function mute(val) {
        if (val) {
            setmuted(true);
        } else {
            setmuted(false);
        }
    }



    function isLooped(val) {
        if (val) {
            setIsBeingLooped(false);
        } else {
            setIsBeingLooped(true);
        }
    }

    function handleChange(val) {
        ref.current.currentTime = val;
    };

    const onPlaying = () => {
        const duration = ref.current.duration;
        const ct = ref.current.currentTime;
        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration , "ct": ct })
    }
     const reset = (val) => {
        ref.current.currentTime=val;
     }
    return (
        <div className="desktop">
            <div className="music-player-wrapper">
                <div className="music-player">
                    <Top currentSong={currentSong}/>
                    <div className="overlap-group">
                        <Text currentSong={currentSong} />
                        <Volume
                            isMuted={mute}
                             refero = {ref}/>
                        <PlayPause
                            refero={ref}
                            looped={isLooped}
                            clicked={handlePrevious}
                            currentSong={currentSong}
                            setPlay = {setPlay}
                            play={play}
                            setCurrentSong={setCurrentSong}
                            reset = {reset}

                            />
                    </div>
                    <Timeline currentSong={currentSong}
                     handleChange={handleChange} 
                     onPlaying={onPlaying}
                     refero = {ref} />
                </div>
            </div>
            <audio autoPlay
                loop={isBeingLooped}
                muted={muted}
                ref={ref} src={currentSong.src} onTimeUpdate={onPlaying} />
        </div>
    );
}
export default App;