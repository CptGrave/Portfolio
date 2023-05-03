import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import React from 'react'

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/lukastrevo" target="_blank"><FaFacebookF /></a>
        <a href="https://instagram.com/cptgrave" target="_blank"><FiInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>©EGATOR tutorials all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer