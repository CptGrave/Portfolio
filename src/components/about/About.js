import "./about.css"
import meAbout from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

import React from 'react'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>0 years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>None kurwa xD</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>Check github</small>
            </article>
          </div>
          <p>Some text describing my humble person</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About