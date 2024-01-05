import React from "react";

function Text({currentSong}) {
    return (
        <div className="group">
            <div className="text-wrapper">{currentSong.name}</div>
            <div className="text-wrapper-2">BY</div>
            <div className="text-wrapper-3">{currentSong.by}</div>
        </div>
    );
}

export default Text; 