import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videoDb from './data/data';
import { useState } from 'react';
function App() {

  const [videos, setVideos] = useState(videoDb);

  return (
    <div className="App">
      <div>Videos</div>
      {/* let render the video object */}
      <div>
        <button onClick={
          () => {
            setVideos([...videos, {
              id: videos.length + 1,
              title: 'New Video',
              views: 0,
              time: '0:00',
              channel: 'New Channel',
              verified: false
            }])
          }

        }>
          Add Video
        </button>
      </div>
      {
        videos.map((video, index) => {
          return (
            <Video
              key={index}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
            >
              <PlayButton onPlay={() => console.log('play')} onPause={() => console.log('pause')} >{video.title}</PlayButton>
            </Video>
          )
        }
        )
      }
    </div>
  );
}

export default App;
