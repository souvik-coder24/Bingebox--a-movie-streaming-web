import React, { useRef } from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay, FaInfo} from "react-icons/fa"
import Data from '../../data.json'

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
      <Navbar/>
      <Slider {...settings}>
        {Data.map(index =>(
        <div className="hero">
          <img src={index.background} alt="" className='banner-img'/>
          <div className="hero-caption">
            <img src={index.bsp} alt="bingespecial" className='bsp'/>
            <img src={index.title} alt="title" className='caption-img' />
            <p className='details'>{index.details}</p>
            <p>{index.description}</p>
            <p className='details'>{index.mcategory}</p>
            <div className="hero-btns">
              <button className='btn'><FaPlay className='btn-icon'/>Play</button>
              <button className='btn2'><FaInfo className='btn-icon'/>More info</button>
            </div>
          </div>
        </div>
        ))}
      </Slider>
  </div>
  )
}

export default Home;