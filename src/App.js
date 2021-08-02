// import logo from './logo.svg';
import './App.css';
import VideoCard from './VideoCard';
import React ,{useState,useEffect} from "react";
import db from './firebase';
function App() {
  const [reels,setReels]=useState([])
  useEffect(() => {
    //App component will run once it loads
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])




  return (
    <div className="App">
      <div className="app__top">
          {/* iamge at top- logo */}
          <img
            className="app__logo"
            src="https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg"
            alt="logo"
          />
          <h1>Reels</h1>
          {/* reels text */}
      </div>
      <div className="app__videos">
        {reels.map(({channel,avatarSrc,song,url,likes,shares})=>(

          <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          /> 
        ))}
          {/* container of app__videos{scrollable container} */}
          {/* <VideoCard
            channel={'Clever Programming'}
            avatarSrc={'https://firebasestorage.googleapis.com/v0/b/ig-reels-clone-4ffba.appspot.com/o/avatar.jpg?alt=media&token=3178832a-3fec-443d-8d7b-164cf5361b19'}
            song={'Test song -sssangha'}
            url={'https://firebasestorage.googleapis.com/v0/b/ig-reels-clone-4ffba.appspot.com/o/vv.mp4?alt=media&token=eef35677-2a30-48b2-a3c3-5a718e5d544a'}
            likes={1000}
            shares={30}
          />  */}       
      </div>
    </div>
  );
}

export default App;
