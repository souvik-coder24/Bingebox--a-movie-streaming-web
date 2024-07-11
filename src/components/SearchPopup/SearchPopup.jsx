import React, { useState } from 'react';
import './SearchPopup.css';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchPopup = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [apiKey] = useState('de2bfd64a5f84456674e8ca99d5cc465');
  const [baseURL] = useState('https://api.themoviedb.org/3');
  const [imageBaseURL] = useState('https://image.tmdb.org/t/p/w500');
  const [genreMapping] = useState({
    Action: 28,
    Romance: 10749,
    Horror: 27,
    Adventure: 12,
    Emotional: '18,10749',
    SuperHero: 878,
    Thriller: 53,
    Comedy: 35,
    Biopic: 18,
    Mystery: 9648,
    Historical: 36,
    Travel: '99,12',
    Anime: 16,
    Crime: 80,
    Lifestyle: '10751,99',
    Food: '99,12',
  });

  const navigate = useNavigate();

  const handleSearch = async (filter) => {
    let url = `${baseURL}/search/movie?api_key=${apiKey}&query=${query}`;
    if (filter) {
      url = `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=${filter}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data from TMDB', error);
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

  const handleFilterClick = (genre) => {
    const genreId = genreMapping[genre];
    handleSearch(genreId);
  };

  const handleResultClick = (id) => {
    onClose();
    navigate(`/player/${id}`);
  };

  return (
    isOpen && (
      <div className='search-popup-overlay' onClick={onClose}>
        <div className='search-popup' onClick={e => e.stopPropagation()}>
          <button className='popup-close' onClick={onClose}>
            <FaTimes />
          </button>
          <div className="search-box">
            <input type='text' placeholder='Movies, shows and more...' value={query} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
            <button onClick={() => handleSearch()}><FaSearch/></button>
          </div>
          <div className="search-filters">
            <div className="filter-element">
              {Object.keys(genreMapping).map(genre => (
                <p key={genre} onClick={() => handleFilterClick(genre)}>{genre}</p>
              ))}
            </div>
          </div>
          <div className='search-results'>
            {results.map(result => (
              <div key={result.id} className='search-result-item' onClick={() => handleResultClick(result.id)}>
                {result.poster_path && (
                  <img src={`${imageBaseURL}${result.poster_path}`} alt={result.title} className='movie-poster'/>
                )}
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
