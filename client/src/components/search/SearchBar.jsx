import React, {useState} from 'react'
import '../../assets/static/css/searchBar.css'

function SearchBar({onChange, text}) {

  return (
    <div className='search-bar'>
        <input type="text" placeholder='Search for songs, artists, albums, and more.' onChange={onChange} value={text}/>
        <div className="mic-icon"></div>
    </div>
  )
}

export default SearchBar