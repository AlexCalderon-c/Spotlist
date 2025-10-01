import React from 'react'

function SongItem({song, onClick}) {
  return (
    <div className='song-item'>
        <div className="song-info">
            <div className="song-title">{song.title}</div>
            <div className="song-desc">{song.artist} | {song.album}</div>
        </div>
        <button className='button-song' onClick={() => onClick(song)}>+</button>
    </div>
  )
}

export default SongItem