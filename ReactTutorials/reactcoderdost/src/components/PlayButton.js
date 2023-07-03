import './PlayButton.css'
import { useState } from 'react';

const PlayButton = ({ message, children, onPlay, onPause }) => {
    // let playing = false;

    const [playing, setPlaying] = useState(false);

    const handleClick = () => {
        if (playing) {
            onPause();
        } else {
            onPlay();
        }

        setPlaying(!playing);
    };

    return (
        <button onClick={handleClick}>
            {children} : {playing ? '▶️' : '⏸️'}
        </button>
    )
}

export default PlayButton
