import React from 'react'
import SongList from '../../components/main/SongList'
import SongResults from '../../components/main/SongResults'

function Main({songs, playlistSong, onClick, onDelete, onNameChange, name}) {
  return (
    <section className='lists-container'>
      <SongResults songs={songs} onClick={onClick}/>
      <SongList playlistSong={playlistSong} onDelete={onDelete} onChange={onNameChange} name={name}/>
    </section>
  )
}

export default Main