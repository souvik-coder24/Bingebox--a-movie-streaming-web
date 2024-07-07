import React, { useState } from 'react';
import './SearchPopup.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchPopup = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [apiKey] = useState('de2bfd64a5f84456674e8ca99d5cc465');
  const [baseURL] = useState('https://api.themoviedb.org/3');
  const [imageBaseURL] = useState('https://image.tmdb.org/t/p/w500');

  const handleSearch = async () => {
    if (query) {
      try {
        const response = await fetch(
          `${baseURL}/search/movie?api_key=${apiKey}&query=${query}`
        );
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    isOpen && (
      <div className='search-popup-overlay'>
        <div className='search-popup'>
          <button className='popup-close' onClick={onClose}>
            <FaTimes />
          </button>
          <div className="search-box">
            <input type='text' placeholder='Movies, shows and more....' value={query} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
            <button onClick={handleSearch}><FaSearch/></button>
          </div>
          <div className='search-results'>
            {results.map(result => (
              <div key={result.id} className='search-result-item'>
                {result.poster_path && (
                  <img src={`${imageBaseURL}${result.poster_path}`} alt={result.title} className='movie-poster'/>)}
                  <h3>{result.title}</h3>
                  <p><strong>Release Date:</strong> {result.release_date}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SearchPopup;
