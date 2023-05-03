import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md"

import React from 'react'
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => { setActiveNav("#") }}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => { setActiveNav("#about") }}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => { setActiveNav("#experience") }}
        className={activeNav === "#experience" ? "active" : ""}>
        <BiBook /></a>
      <a
        href="#contact"
        onClick={() => { setActiveNav("#contact") }}
        className={activeNav === "#contact" ? "active" : ""}>
        <MdOutlineMessage /></a>
    </nav>
  )
}

export default Nav