import React from 'react'
import './Video.css'

function Video(){
    return(
        <div className = 'video-container'>
            <h2>Latest Trailer</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xJ9Ddp2ZkPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}


export default Video;