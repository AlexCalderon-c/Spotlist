import { useState, useEffect, use } from 'react'
import Header from './components/header/Header'
import SearchContainer from './components/search/SearchContainer'
import Main from './components/main/Main'
import {getToken, initiateSpotifyAuth} from './authService.js'
import {searchTrack} from './searchApi.js'
import {createPlaylist} from './createPlaylist.js'


function App() {
  const [playlistItems, setPlaylistItems] = useState([])
  const [name, setName] = useState('')
  const [input, setInput] = useState('')
  const [uri, setUri] = useState([])
  const [song, setSong] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    console.log(uri)
  }, [uri])

  const handleChangeInput = async ({target}) => {
    setInput(target.value)

    if (target.value && token) {
      const tracks = await searchTrack(target.value, token)
      console.log(tracks)
      setSong(tracks)
    }
  }

  const handleChangeName = ({target}) => {
    setName(target.value)
  }

  const handleClick = (song) => {
    if(!playlistItems.find(item => item.id === song.id)){
      setPlaylistItems(prev => [...prev, song])
      if (!uri.includes(song.uri)){
        setUri(prev => [...prev, song.uri])
      }
    }
  }

  const handleDelete = (index) => {
    setPlaylistItems(prev => prev.filter(item => item.id !== index))
  }

  const handleUser = () => {
    if (token) {
      createPlaylist(name, token, uri)
      alert('Playlist created successfully!')
      setUri([])
      setPlaylistItems([])
      setName('')
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    if (code) {
      const setupToken = async () => {
        try {
          const newToken = await getToken(code)
          if (newToken) {
            localStorage.setItem('access_token', newToken)
            console.log('New token obtained:', newToken)
            setToken(newToken)
          }
        } catch (error) {
          console.error('Error setting up token:', error)
        }
      }
      setupToken()
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token)
    }
  }, [token])


  const handleLogin = () => {
    initiateSpotifyAuth()
  }

  return (
    <>
      <Header onClick={handleLogin}/>
      <main>
        <SearchContainer onChange={handleChangeInput} text={input}/>
        <Main song={song} onClick={handleClick} playlistSong={playlistItems} onDelete={handleDelete} onInputChange={handleChangeInput} onNameChange={handleChangeName} name={name} onPlaylist={handleUser}/>
      </main>
    </>
  )
}

export default App
