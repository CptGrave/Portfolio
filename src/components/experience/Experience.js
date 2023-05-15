import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

import React from 'react'

function Experience() {
  return (
    <section id="experience">
      <h2>Skills and Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h5>HTML</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h5>ReactJS</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h5>CSS</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h5>Bootstrap</h5>
                <small className="text-light">Basic</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h5>JQuery</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h5>Git with bash</h5>
                <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h5>GitHub</h5>
                <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h5>Working with API's</h5>
                <small className="text-light">Basic</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience