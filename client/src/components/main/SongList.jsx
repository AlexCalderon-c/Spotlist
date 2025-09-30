import React from 'react'
import SongPlaylistItem from './SongPlaylistItem'

function SongList({playlistSong}) {
  
  return (
    <div className='song-playlist'>
      <input type="text" className='playlist-name'/>  
      <div className="playlist-items">
        {playlistSong.map((song, index) => (
          <SongPlaylistItem key={index} song={song}/>
        ))}
      </div>
    </div>
  )
}

export default SongList