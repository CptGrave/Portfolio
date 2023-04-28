import "./nav.css"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {MdOutlineMessage} from "react-icons/md"

import React from 'react'

function Nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav