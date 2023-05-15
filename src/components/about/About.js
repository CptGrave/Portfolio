import "./about.css"
import meAbout from "../../assets/me-about.png"
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"
import React from 'react'

function About() {
  return (
    <section id="about">
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
              <small>2 years of deliberate practice and pet projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ small projects all deployed on github pages</small>
            </article>
          </div>
          <p>Hi. I'm a self taught programmer, looking for an entry level job in IT. Searching for place where i can grow and improve my skills. I would like to work on more complex projects, and see how  teamwork looks like. People say I'm an very open person, good at communicating and listening. I'm trough hard working and eager to learn. Given the opportunity I believe I can quickly become a valuable asset in your team.</p>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About