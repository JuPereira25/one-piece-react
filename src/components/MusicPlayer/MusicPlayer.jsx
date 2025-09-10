import React, { useState, useRef } from "react";
import playIcon from "../../assets/icon/play-icon.svg";
import pauseIcon from "../../assets/icon/pause-icon.svg";
import styles from "./MusicPlayer.module.css"; 

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/theme.mp3"));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePlay} className={styles.musicButton}>
      <img
        src={isPlaying ? pauseIcon : playIcon}
        alt={isPlaying ? "Pause" : "Play"}
        className={styles.musicIcon}
      />
    </button>
  );
}

export default MusicPlayer;
