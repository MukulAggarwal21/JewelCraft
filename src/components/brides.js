import React from 'react'
import '../App.css'
import image1 from '../images/Women/Bride1.jpg'
import image2 from '../images/Women/Bride2.jpg'
import image3 from '../images/Women/Bride3.jpg'
import image4 from '../images/Women/Bride-essentials-4.jpg'
import image5 from '../images/Women/Bride5.jpg'
import whatsapp from '../images/logo/whatsapp-logo-png-2260.png'

const brides = () => {
  return (
    <>
      <div className="bridetop">
      <h1>Brides Of India</h1>
      <h4>Leading the journey of a new life in their own unique way</h4>
        <div className="line11">
          <img className='img1' src={image1} alt="image1" />
          <img className='img1' src={image2} alt="image2" />
          <img className='img1' src={image3} alt="image3" />
          <img className='img1' src={image4} alt="image4" />
          <img className='img1' src={image5} alt="image5" />
          <div className="overlay">
            <a href="https://www.whatsapp.com" target="_blank" rel='noreferrer'><img src={whatsapp} alt="WhatsApp Logo" className="whatsapp-logo" /></a>
            <div className="heading">
              <h3>@RJ</h3>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default brides
