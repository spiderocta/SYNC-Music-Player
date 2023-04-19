import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "1.5rem",
          top: "0",
          position: "sticky",
          zIndex: "1",
          backgroundColor: "rgb(198, 204, 204)",
          borderBottom: "2px solid rgb(105, 141, 102)",
        }}
      >
        <h2>My Collection </h2>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
