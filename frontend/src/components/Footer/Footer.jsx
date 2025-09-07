import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>QuickBite is your go-to food delivery platform bringing delicious meals from your favorite local restaurants right to your doorstep.
            We are committed to fast, fresh, and reliable delivery. Whether you’re craving a quick snack, a hearty meal, or a gourmet experience, QuickBite makes it easy to satisfy your hunger anytime, anywhere.
            Our mission is to make food delivery simple, convenient, and enjoyable for everyone.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@QuickBite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © QuickBite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
