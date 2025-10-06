import React from 'react'
import SongPlaylistItem from './SongPlaylistItem'
import '../../assets/static/css/songList.css'

function SongList({playlistSong, onDelete, onChange, name, onPlaylist}) {
  
  return (
    <div className='song-playlist'>
      <input type="text" className='playlist-name' onChange={onChange} value={name} placeholder='Add a name here'/>  
      <div className="playlist-items">
        {playlistSong.map((song) => (
          <SongPlaylistItem key={song.id} song={song} onDelete={onDelete}/>
        ))}
      </div>
      <button className='button-save' onClick={onPlaylist}>Save to spotify</button>
    </div>
  )
}

export default SongList