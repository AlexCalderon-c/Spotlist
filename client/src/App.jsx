import { useState } from 'react'
import Header from './components/header/Header'
import SearchContainer from './components/search/SearchContainer'
import Main from './components/main/Main'
import {songs} from './db.js'




function App() {
  const [playlistItems, setPlaylistItems] = useState([])

  const handleClick = (song) => {
    setPlaylistItems([...playlistItems, song])
  }

  return (
    <>
      <Header />
      <SearchContainer />
      <Main songs={songs} onClick={handleClick} playlistSong={playlistItems}/>
    </>
  )
}

export default App
