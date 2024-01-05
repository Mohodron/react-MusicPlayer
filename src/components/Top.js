import React from "react";


function Top({currentSong}) {
    return (
        <div className="overlap">
            <img className="rectangle" alt="Rectangle" src={currentSong.img} />
            <div className="div" />
            <img className="ellipse" alt="Ellipse" src={currentSong.img} />
        </div>
    );
}

export default Top;