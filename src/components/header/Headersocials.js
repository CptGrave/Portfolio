import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

function Headersocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/cptgrave/" target="_blank"><BsLinkedin/></a>
      <a href="https://www.facebook.com/lukastrevo" target="_blank"><BsFacebook/></a>
      <a href="https://github.com/CptGrave" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default Headersocials