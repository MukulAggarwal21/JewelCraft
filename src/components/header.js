import React from 'react'
import './header.css'
import logo from '../images/Shop Logo/Screenshot 2024-04-05 203022.png'
import account from '../images/Navbar/user.png'
import store from '../images/Navbar/jewelry-shop.png'
import wishlist from '../images/Navbar/wishlist.png'
import cart from '../images/Navbar/shopping-cart.png'

const extra = () => {
  return (
    <>
      <div className="top">
        <img className='logoimage' src={logo} height="90" alt="company logo" loading="lazy" />
        <div className="brandname">
          <h1>Radhe Jewellers</h1>
        </div>
        <div className="top12">
          <div className="Account">
            <img src={account} alt="account" />
            <a href="/"> <span>Account</span></a>
          </div>
          <div className="wishlist">
            <img src={wishlist} alt="wishlist" />
            <a href="/"> <span>Wishlist</span></a>
          </div>
          <div className="cart">
            <img src={cart} alt="cart" />
            <a href="/"><span>Cart</span></a>
          </div>
          <div className="store">
            <img src={store} alt="store" />
            <a href="/"><span>Store</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default extra
