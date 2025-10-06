import React from 'react'
import SongItem from './SongItem'
import '../../assets/static/css/songResult.css'

function SongResults({songs, onClick}) {

  return (
    <div className='song-results-container'>
      <h2>Results</h2>
      <div className="playlist-items">
        {songs.map((song) => (
          <SongItem key={song.id} song={song} onClick={onClick}/>
        ))}
      </div>
    </div>
  )
}

export default SongResults
