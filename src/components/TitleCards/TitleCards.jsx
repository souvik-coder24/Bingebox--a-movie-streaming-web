import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJiZmQ2NGE1Zjg0NDU2Njc0ZThjYTk5ZDVjYzQ2NSIsIm5iZiI6MTcyMDE5NjM1My41MTk5MjksInN1YiI6IjY2ODgxYmY4NDE5ZDljYzEyYmIwYTM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kugTDtCyfUdXVqK2lpa7cv-_RPZDaJu1TCizLte9U9U'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => {
        const movies = data.results.map(movie => ({
          id: movie.id, // Ensure you capture the movie ID
          name: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }));
        setCardsData(movies);
      })
      .catch(err => console.error(err));
  }, [category]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on BingeBox"}</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index}>
            <div className="card">
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default TitleCards;
