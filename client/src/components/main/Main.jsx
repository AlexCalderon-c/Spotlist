import React from 'react'
import SongList from '../../components/main/SongList'
import SongResults from '../../components/main/SongResults'
import '../../assets/static/css/main.css'

function Main({song, playlistSong, onClick, onDelete, onNameChange, name, onPlaylist}) {
  return (
      <section className='lists-container'>
        <SongResults songs={song} onClick={onClick}/>
        <SongList playlistSong={playlistSong} onDelete={onDelete} onChange={onNameChange} name={name} onPlaylist={onPlaylist}/>
      </section>
  )
}

export default Main