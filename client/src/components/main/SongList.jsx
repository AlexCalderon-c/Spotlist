import React from 'react'
import SongPlaylistItem from './SongPlaylistItem'

function SongList({playlistSong, onDelete, onChange, name}) {
  
  return (
    <div className='song-playlist'>
      <input type="text" className='playlist-name' onChange={onChange} value={name}/>  
      <div className="playlist-items">
        {playlistSong.map((song) => (
          <SongPlaylistItem key={song.id} song={song} onDelete={onDelete}/>
        ))}
      </div>
      <button className='button-save'>Save to spotify</button>
    </div>
  )
}

export default SongList