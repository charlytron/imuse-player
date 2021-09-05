import React from "react";
// import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong({ ...selectedSong[0] });
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    console.log('select song')
    setSongs(newSongs);
    // check if song is playing
    if(isPlaying) audioRef.current.play();
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    //   audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
