import React from 'react'
import './VideoHeader.css'
// import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon/>
            <h3>Reels</h3>
            <CameraAltOutlinedIcon/>
        </div>
    )
}

export default VideoHeader
   