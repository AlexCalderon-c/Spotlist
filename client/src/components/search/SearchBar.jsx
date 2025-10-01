import React, {useState} from 'react'

function SearchBar({onChange, text}) {

  return (
    <div className='searchBarContainer'>
        <div className="searchBarIcon"></div>
        <input type="text" placeholder='Search for songs, artists, albums, and more.' onChange={onChange} value={text}/>
        <div className="micIcon"></div>
    </div>
  )
}

export default SearchBar