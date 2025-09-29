import React from 'react'

function SearchBar() {
  return (
    <div className='searchBarContainer'>
        <div className="searchBarIcon"></div>
        <input type="text" placeholder='Search for songs, artists, albums, and more.' />
        <div className="micIcon"></div>
    </div>
  )
}

export default SearchBar