import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay, FaStopwatch } from "react-icons/fa";
import Data from '../../data.json';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

function Home() {
  const [loading, setLoading] = useState(true);

  const homeRef = useRef(null);
  const newPopularRef = useRef(null);
  const wishListRef = useRef(null);
  const onlyOnBingeBoxRef = useRef(null);
  const moviesRef = useRef(null);
  const upcomingRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'new-popular':
        newPopularRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'wish-list':
        wishListRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'only-on-bingebox':
        onlyOnBingeBoxRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'movies':
        moviesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'upcoming':
        upcomingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 30000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div className="home" ref={homeRef}>
        <Slider {...sliderSettings}>
          {Data.map((item, index) => (
            <div className="hero" key={index}>
              <video
                src={item.video}
                className="banner-video"
                autoPlay
                muted
                playsInline
                loop
                poster={item.poster}
              />
              <div className="hero-caption">
                <img src={item.bsp} alt="bingespecial" className="bsp" />
                <img src={item.title} alt="title" className="caption-img" />
                <p className="details">{item.details}</p>
                <p>{item.description}</p>
                <p className="details">{item.mcategory}</p>
                <div className="hero-btns">
                  <button className="btn">
                    <FaPlay className="btn-icon" />
                    Play
                  </button>
                  <button className="btn2">
                    <FaStopwatch className="btn-icon" />
                    Watch Later
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div ref={newPopularRef}><TitleCards title={"New & Popular"} category={"top_rated"} /></div>
        <div ref={onlyOnBingeBoxRef}><TitleCards title={"Only on Binge-Box"} category={"popular"} /></div>
        <div ref={moviesRef}><TitleCards title={"Movies"} category={"now_playing"} /></div>
        <div ref={upcomingRef}><TitleCards title={"Upcoming"} category={"upcoming"} /></div>
        <Footer />
      </div>
    </>
  );
}

export default Home;