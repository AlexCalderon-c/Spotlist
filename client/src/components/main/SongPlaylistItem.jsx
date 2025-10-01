import React, {useState} from 'react'

function SongPlaylistItem({song, onDelete}) {
    
  return (
    <>
        <div className='song-item'>
            <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-desc">{song.artist} | {song.album}</div>
            </div>
            <button className='delete-song' onClick={() => onDelete(song.id)}>X</button>
        </div>
    </>
  )
}

export default SongPlaylistItem