import React from 'react'
import '../../assets/static/css/songItem.css'
import { msToTime } from '../../prueba.js'

function SongItem({song, onClick, onAdd}) {
  return (
    <>
    <div className='song-item'>
        <div className="song-info">
            <div className="song-title">{song.title}</div>
            <div className="song-desc">{song.artist} | {song.album}</div>
        </div>
        <div className="info-container">
          <div className="time">{msToTime(song.duration)}</div>
          <button className ='button-song' onClick={() => {
            onClick(song)
          }}>+</button>
        </div>
    </div>
    <div className="separator"></div>
    </>
  )
}

export default SongItem