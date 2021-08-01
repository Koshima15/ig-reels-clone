import React, { useRef, useState } from 'react';
import "./VideoCard.css";
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter'; 
function VideoCard({url,likes,channel,shares,song,avatarSrc}) {
const [isVideoPlaying,setIsVideoPlaying]=useState(false)
   const videoRef = useRef(null)
    //useref

    const onVideoPress=()=>{
        if(isVideoPlaying){
            //stop
            videoRef.current.pause()
            setIsVideoPlaying(false)
        }
        else{
            //play
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader/> 
            <video className="videoCard__Player"
            ref={videoRef}
            onClick={onVideoPress }
            src={url}
            loop 
            /> 
           <VideoFooter 
            channel={channel}
            avatarSrc={avatarSrc}
            url={url}
            likes={likes}
            shares={shares}
            song={song}
           /> 
        </div>
    )
}

export default VideoCard
