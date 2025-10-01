import { useState } from 'react'
import Header from './components/header/Header'
import SearchContainer from './components/search/SearchContainer'
import Main from './components/main/Main'
import {songs} from './db.js'


function App() {
  const [playlistItems, setPlaylistItems] = useState([])
  const [name, setName] = useState('')
  const [input, setInput] = useState('')
  const [uri, setUri] = useState([])

  const handleChangeInput = ({target}) => {
    setInput(target.value)
  }

  const handleChangeName = ({target}) => {
    setName(target.value)
  }

  const handleClick = (song) => {
    setPlaylistItems(prev => [...prev, song])
  }

  const handleAddClick = (song) => {
    setUri(prev => [...prev, song.uri])
  }

  const handleDelete = (index) => {
    setPlaylistItems(prev => prev.filter(item => item.id !== index))
  }

  const addUri = (song) => {
    setUri(prev => [...prev, song.uri])
  }

  return (
    <>
      <Header />
      <SearchContainer onChange={handleChangeInput} text={input}/>
      <Main songs={songs} onClick={handleClick} playlistSong={playlistItems} onDelete={handleDelete} onInputChange={handleChangeInput} onNameChange={handleChangeName} name={name}/>
    </>
  )
}

export default App
