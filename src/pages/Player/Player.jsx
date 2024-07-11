import React, { useEffect, useState } from 'react';
import './Player.css';
import { FaChevronLeft } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams(); // Get id parameter from URL

  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: ""
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
          setVideoData({
            name: data.results[0].name,
            key: data.results[0].key,
            published_at: data.results[0].published_at
          });
        } else {
          throw new Error('No video found');
        }
      })
      .catch(err => console.error(err));
  }, [id, options]); // Include id and options in dependencies array

  return (
    <div className='player'>
      <p><FaChevronLeft className='back-icon'/> Home</p>
      {videoData.key ? (
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${videoData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>
      ) : (
        <p>Loading...</p>
      )}
      <div className="player-info">
        <p>{videoData.name}</p>
        <p>Release Date: {videoData.published_at.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default Player;