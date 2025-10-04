import React from 'react'
import SearchBar from './SearchBar'
import '../../assets/static/css/searchContainer.css'

function SearchContainer({onChange, text}) {
  return (
    <section className='search-bar-container'>
        <div className="text-desc">
            <h1>Find your next favorite song</h1>
            <p>Search for songs, artists, albums, and more.</p>
        </div>
        <div className="separator"></div>
        <SearchBar onChange={onChange} text={text}/>
    </section>
  )
}

export default SearchContainer