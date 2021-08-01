import React from 'react'
import './VideoFooter.css'
import {Button, Avatar} from '@material-ui/core'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import Ticker from 'react-ticker'
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
function VideoFooter ({channel,likes,shares,song,avatarSrc}) {
    return (
        <div className="videoFooter">
            <div className='videoFooter_text'>
                <Avatar src= {avatarSrc}/>
                <h3>
                    {channel} •<Button>Follow</Button>
                </h3>
            </div>
            <div className='videoFooter_ticker'>

            
           <MusicNoteIcon className='icon'/>
           <span>{song}</span>
                {/* <Ticker mode="smooth" className="ticker">
                 {({ index }) => (
                     <>
                    <h1>{song}</h1>
                    
                     </>
        )}
            </Ticker> */}
            </div>
            <div className="videoFooter_actions">
            <div className="videoFooter_actionsLeft">
                <FavoriteIcon fontSize="large"/>
                <ModeCommentIcon fontSize="large"/>
                <SendIcon fontSize="large"/>
                <MoreHorizIcon fontSize="large"/>

            </div>
            <div className="videoFooter_actionsRight">
            <div className="videoFooter_stat">
                    <FavoriteIcon />
                    <span>{likes}</span>
                </div >
                <div className="videoFooter_stat">
                <MoreHorizIcon />
                    <span>{shares}</span>
                </div>

         </div>
         </div>
        </div>
    )
}

export default VideoFooter
