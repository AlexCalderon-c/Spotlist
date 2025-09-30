import React, {useState} from 'react'

function SearchBar() {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='searchBarContainer'>
        <div className="searchBarIcon"></div>
        <input type="text" placeholder='Search for songs, artists, albums, and more.' onChange={handleChange} value={input}/>
        <div className="micIcon"></div>
    </div>
  )
}

export default SearchBar