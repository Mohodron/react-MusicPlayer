import { useRef, useState } from "react";
import React from "react";

function Volume(props) {
    const [mute, setMute] = useState(false);
    const volumeRef = useRef();
   

    function handleClick() {
        if (mute) {
            setMute(false);
            props.isMuted(false);
        } else {
            setMute(true);
            props.isMuted(true);
        }
    }


    const handleVolumeChange = (e) => {
        let width = volumeRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const progress = offset / width * 100;
        props.refero.current.volume = progress/100;
    }
    return (
        <div className="volume-wrapper">
        <div className="rectangle-wrapper" onClick={handleVolumeChange} ref={volumeRef}>
              <div style={{ width: `${props.refero.current?.volume*100}` + "%" }} className="rectangle-2" />
            </div>
            {mute ? <div onClick={handleClick} className="sound-icon animation cursor">
                <span className="tooltip-text">Unmute</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5953 2.76934C14.5953 2.63325 14.5592 2.49959 14.4907 2.38199C14.4222 2.2644 14.3237 2.16709 14.2053 2.09999C14.0869 2.03289 13.9529 1.99841 13.8168 2.00006C13.6807 2.00171 13.5475 2.03943 13.4307 2.10939L5.92199 6.61218H3.05755C1.78224 6.61218 0.75 7.64289 0.75 8.91973V15.0763C0.75 16.3516 1.7807 17.3838 3.05755 17.3838H5.92199L13.4292 21.8897C13.546 21.96 13.6794 21.9981 13.8157 21.9999C13.952 22.0018 14.0863 21.9674 14.205 21.9002C14.3236 21.8331 14.4223 21.7356 14.4909 21.6178C14.5594 21.5 14.5955 21.3661 14.5953 21.2297V2.76934ZM21.0672 11.9934L23.2424 14.1671L22.1548 15.2547L19.9796 13.081L17.8043 15.2547L16.7167 14.1671L18.8919 11.9934L16.7167 9.81967L17.8043 8.73205L19.9796 10.9058L22.1564 8.73205L23.2424 9.81967L21.0672 11.9934Z" fill="white" />
                </svg> </div> : <div onClick={handleClick} className="sound-icon animation curor">
                <span className="tooltip-text">Mute</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_26_3365)">
                        <path d="M14.8453 2.76934C14.8453 2.63325 14.8092 2.49959 14.7407 2.38199C14.6722 2.2644 14.5737 2.16709 14.4553 2.09999C14.3369 2.03289 14.2029 1.99841 14.0668 2.00006C13.9307 2.00171 13.7975 2.03943 13.6807 2.10939L6.17199 6.61218H3.30755C2.03224 6.61218 1 7.64289 1 8.91973V15.0763C1 16.3516 2.03071 17.3838 3.30755 17.3838H6.17199L13.6792 21.8897C13.796 21.96 13.9294 21.9981 14.0657 21.9999C14.202 22.0018 14.3363 21.9674 14.455 21.9002C14.5736 21.8331 14.6723 21.7356 14.7409 21.6178C14.8094 21.5 14.8455 21.3661 14.8453 21.2297V2.76934Z" fill="white" />
                        <path d="M19.2297 12.0028C19.2297 10.3387 18.2125 8.91375 16.7688 8.31375L16 10.1606C16.7219 10.4606 17.2281 11.1731 17.2281 12.0075C17.2281 12.8372 16.7219 13.5497 16 13.8544L16.7688 15.7012C18.2125 15.0919 19.2297 13.6669 19.2297 12.0028ZM18.3062 4.62L17.5375 6.46687C19.7078 7.37156 21.2313 9.50906 21.2313 12.0028C21.2313 14.5012 19.7078 16.6341 17.5375 17.5387L18.3062 19.3856C21.1984 18.1809 23.2281 15.3309 23.2281 12.0028C23.2281 8.67468 21.1984 5.82468 18.3062 4.62Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_26_3365">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>}
        </div>
    );
}

export default Volume;