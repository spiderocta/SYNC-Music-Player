import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //event handler

  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong(selectedSong[0]);
    // Adding active state
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
    setSongs(newSongs);
    // check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: "0.7rem",
        }}
      >
        <h1>{song.head}</h1>
      </div>
      <div
        onClick={songSelectHandler}
        className={`library-song ${song.active ? "selected" : ""}`}
      >
        <img alt={song.name} src={song.cover}></img>
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default LibrarySong;
