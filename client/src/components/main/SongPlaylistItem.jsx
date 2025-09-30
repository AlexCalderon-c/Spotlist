import React, {useState} from 'react'

function SongPlaylistItem({song, key}) {
    
  return (
    <>
        <div>SongPlaylistItem</div>
        <div className='song-item'>
            <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-desc">{song.artist} | {song.album}</div>
            </div>
        </div>
    </>
  )
}

export default SongPlaylistItem