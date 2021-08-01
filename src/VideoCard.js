import React from 'react';
import "./VideoCard.css";
function VideoCard() {
    return (
        <div className="videoCard">
            <video className="videoCard__Player"
                src='https://www.instagram.com/reel/CRGYlg3F4JK_B2U74E8fBhk_aggkqw6yamk5Qs0/?utm_medium=copy_link'
                loop
            /> 
        </div>
    )
}

export default VideoCard
