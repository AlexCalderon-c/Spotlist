import React from 'react'
import SongList from '../../components/main/SongList'
import SongResults from '../../components/main/SongResults'

function Main({songs, playlistSong, onClick}) {
  return (
    <section className='lists-container'>
      <SongResults songs={songs} onClick={onClick}/>
      <SongList playlistSong={playlistSong}/>
    </section>
  )
}

export default Main