import React, { useRef } from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay, FaStopwatch } from "react-icons/fa"
import Data from '../../data.json'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
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
    <div className='home'>
      <Navbar />
      <Slider {...settings}>
        {Data.map((item, index) => (
          <div className="hero" key={index}>
            <video
              src={item.video}
              className='banner-video'
              autoPlay
              muted
              playsInline
              loop
              poster={item.poster}
            />
            <div className="hero-caption">
              <img src={item.bsp} alt="bingespecial" className='bsp' />
              <img src={item.title} alt="title" className='caption-img' />
              <p className='details'>{item.details}</p>
              <p>{item.description}</p>
              <p className='details'>{item.mcategory}</p>
              <div className="hero-btns">
                <button className='btn'><FaPlay className='btn-icon' />Play</button>
                <button className='btn2'><FaStopwatch className='btn-icon' />Watch Later</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <TitleCards/>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Binge-Box"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;