import React from "react";
import hat from "../pictures/whitehat.webp"
import "./ItemScrollStyle.css"


const scrollBar = () =>{


    const track = document.getElementById("imageTrack")

    window.onmousedown = e =>{
        track.dataset.mouseDownAt = e.clientX;
    }
    
    onmousemove = (event) => {console.log("2")};

    window.onmousemove = e =>{
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * 100;

        track.style.transform = `translate(${percentage},-50%)`

    }

  
    return(
        <div id="imageTrack" data-mouse-down-at="0">
            <img src={hat} alt="" draggable="false"/>
            <img src={hat} alt="" draggable="false" />
            <img src={hat} alt="" draggable="false" />
            <img src={hat} alt="" draggable="false" />
            <img src={hat} alt="" draggable="false" />
            <img src={hat} alt="" draggable="false" />
            <img src={hat} alt="" draggable="false" />

        </div>
    )


 
}

export default scrollBar