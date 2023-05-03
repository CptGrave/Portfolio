import "./header.css"
import CTA from "./CTA"
import React from 'react'
import ME from "../../assets/me.png"
import Headersocials from "./Headersocials"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Łukasz Chorąży</h1>
        <h1 className="text-light">Beginner programmer</h1>
        <CTA />
        <Headersocials />
        <div className="me">
          <img src={ME} alt=""></img>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header