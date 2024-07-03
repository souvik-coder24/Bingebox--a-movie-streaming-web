import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../assets/bg-1.webp'
import bannert1 from '../../assets/bg-title-1.webp'
import bsp from '../../assets/b-special.png'
import { FaPlay } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={Banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={bannert1} alt="title" className='caption-img' />
          <img src={bsp} alt="bingespecial" className='bsp'/>
          <p className='details'>2024 | 7 Languages | U/A +16</p>
          <p>Twin brothers, one a cop, the other a criminal, become entangled in a web of deceit, loyalty, and betrayal, testing their bond and challenging their morals.</p>
          <p className='details'>Thriller | Drama | Action | Organized Crime</p>
          <div className="hero-btns">
            <button className='btn'><FaPlay className='btn-icon'/>Play</button>
            <button className='btn2'><FaInfo className='btn-icon'/>More info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home