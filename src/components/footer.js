import React from 'react'
import '../App.css'
import whatsapp from '../images/Footer logo/whatsapp.png'
import facebook from '../images/Footer logo/facebook (1).png'
import twitter from '../images/Footer logo/twitter.png'
import youtube from '../images/Footer logo/youtube.png'
import instagram from '../images/Footer logo/instagram.png'
import linkedin from '../images/Footer logo/linkedin.png'
import call from '../images/Footer logo/phone-call.png'
import gmail from '../images/Footer logo/gmail.png'
import message from '../images/Footer logo/messages.png'
import {Link} from "react-router-dom"
const footer1 = () => {
  return (
    <footer className='top1'>
      <div className='footertop'>

        {/* Line 1 of footer */}
        <div className="footerline1">

          <div className="line1content">
            <h5>Get Connected with us on Social Network</h5>
          </div>
          <div className="footericon">
            <Link to="https://www.whatsapp.com/"><img src={whatsapp} alt="whatsapp" /></Link>
            <a href="/facebook"><img src={facebook} alt="facebook " /></a>
            <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
            <a href="/"><img src={youtube} alt="youtube" /></a>
            <a href="/"><img src={linkedin} alt="linkedin" /></a>
            <a href="/"><img src={instagram} alt="instagram" /></a>
          </div>

        </div>

        {/* Line 2 of footer */}
        <div className="footerline2">

          <div className="company">
            <h4>Radhe Jewellers 💎</h4>
            <p> "Radhe Jewellers - where timeless elegance meets unmatched craftsmanship. For over 50 years, we've been synonymous with sophistication and trust in fine jewelry. Each piece in our collection tells a story of tradition, passion, and artistry. Step into our world and discover the magic of timeless beauty."<br />
              <div className="address">Address</div>:Sarafa Bajar, Meerut, Uttar Pradesh
            </p>
          </div>

          <div className="products">
            <h4>Products</h4>
            <a href="/">Gold</a>
            <a href="/">Silver</a>
            <a href="/">Diamond</a>
            <a href="/">Platinum</a>
            <a href="/">Special Collection</a>
          </div>

          <div className="usefulLinks">
            <h4>Useful Links</h4>
            <a href="/">Pricing</a>
            <a href="/">Payment Option</a>
            <a href="/">Delivery options</a>
            <a href="/">About RJ💎</a>
            <a href="/">Help & FAQ's</a>

          </div>

          <div className="contact">
            <h4>Contact</h4>
            <a href="/"><img src={gmail} alt="mail" /> Write to Us</a>
            <a href="/"><img src={call} alt="call" />+91 88597 72081</a>
            <a href="/"><img src={message} alt="message" />Chat with us</a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default footer1
