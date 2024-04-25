import React from 'react'
import images from '../images/banner2222.jpg'
import '../App.css'
import Button from 'react-bootstrap/Button';

const trending = () => {
  return (
    <>
      <div className='trendtop'>
        <img className='image1' src={images} alt="trnding" />
        <div className='info'>
          <div className='content'>
            <p>Sales off 20% all Product</p>
            <h1 > New Trending Collection </h1>.
            <p> Best Design make you more special </p>
            <Button variant="outline-warning">Shop-Now</Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default trending
