import React from 'react'
import SongItem from './SongItem'

function SongResults({songs, onClick}) {

  return (
    <div className='song-results-container'>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} onClick={onClick}/>
      ))}
    </div>
  )
}

export default SongResults
