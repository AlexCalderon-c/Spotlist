import React from 'react'
import SearchBar from './SearchBar'

function SearchContainer() {
  return (
    <section className='searchBarContainer'>
        <div className="textDesc">
            <h1>Find your next favorite song</h1>
            <p>Search for songs, artists, albums, and more.</p>
        </div>
        <SearchBar />
    </section>
  )
}

export default SearchContainer