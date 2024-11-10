import React, { useEffect, useState } from 'react';
import './Player.css';
import { FaHeart, FaClock } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();

  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    description: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJiZmQ2NGE1Zjg0NDU2Njc0ZThjYTk5ZDVjYzQ2NSIsIm5iZiI6MTcyMDUzODc2Ny40NTU3OTYsInN1YiI6IjY2ODgxYmY4NDE5ZDljYzEyYmIwYTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bPkqNAlgwzAaQWDSyGkPsfsqaDax-AsBq4UdxW8EHMU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setVideoData(prev => ({
            ...prev,
            key: data.results[0].key,
          }));
        } else {
          throw new Error('No video found');
        }
      })
      .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setVideoData(prev => ({
            ...prev,
            name: data.title,
            published_at: data.release_date,
            description: data.overview
          }));
        }
      })
      .catch(err => console.error(err));
  }, [id, options]);

  const handleWatchTogether = () => {
    alert("Starting watch together session!");
  };

  const handleWatchLater = () => {
    alert(`${videoData.name} has been added to your Watch Later list!`);
  };

  return (
    <>
    <div className='player'>
      {videoData.key ? (
        <iframe 
          src={`https://www.youtube.com/embed/${videoData.key}`} 
          title='Trailer' 
          frameBorder='0' 
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
      <div className="player-info">
        <p className='Header'>{videoData.name}</p>
        {videoData.published_at ? (
          <p className='date'>Release Date: {videoData.published_at.slice(0, 10)}</p>
        ) : (
          <p className='date'>Release Date: Not available</p>
        )}
      </div>
      <p className="description">{videoData.description || "Not available"}</p>
    </div>
      <div className='button-container'>
        <button className='watch-together-btn' onClick={handleWatchTogether}>
          Watch Together <FaHeart className='btn-icon' />
        </button>
        <button className='watch-later-btn' onClick={handleWatchLater}>
          Watch Later <FaClock className='btn-icon' />
        </button>
      </div>
      </>
  );
};

export default Player;