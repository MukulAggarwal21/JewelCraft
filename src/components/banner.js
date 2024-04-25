import React from 'react'
import image1 from '../images/Banner1.jpg'
import image2 from '../images/Banner2.jpg'
import image3 from '../images/Banner4.jpg'
import '../App.css'

const banner = () => {
  return (
    <>

      <div className='bannerout'>
        <div className="banner_thumb">
          <div className='banner1'>
            <a href="/"><img src={image1} alt="ring1" /></a>
            <div className="banner_content">
              <p>New Design</p>
              <h2>Small design Rings</h2>
              <span>Sale 20% </span>
            </div>
          </div>


          {/* 2nd Banner */}
          <div className='banner2'>
            <a href="/"><img src={image2} alt="ring2" /></a>
            <div className="banner_content">
              <p>Bestselling Rings</p>
              <h2>White gold rings</h2>
              <span>Sale 10% </span>
            </div>
          </div>


          {/* 3rd Banner */}
          <div className='banner3'>
            <a href="/"><img src={image3} alt="ring3" height="240px" width="370px" /></a>

            <div className="banner_content">
              <p>Featured Rings</p>
              <h2>Platinium Rings</h2>
              <span>Sale 30% </span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default banner
