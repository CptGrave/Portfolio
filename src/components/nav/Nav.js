import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

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
      <a
        href="#portfolio"
        onClick={() => { setActiveNav("#portfolio") }}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <AiOutlineFundProjectionScreen /></a>
    </nav>
  )
}

export default Nav