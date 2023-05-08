import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"
import IMG7 from "../../assets/portfolio7.jpg"
import IMG8 from "../../assets/portfolio8.jpg"
import IMG9 from "../../assets/portfolio9.jpg"
import IMG10 from "../../assets/portfolio10.jpg"
import IMG11 from "../../assets/portfolio11.jpg"
import IMG12 from "../../assets/portfolio12.jpg"
import React from 'react'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Reeds (in development)",
    github: "https://github.com/CptGrave/my-library",
    demo: "https://cptgrave.github.io/my-library/"
  },
  {
    id: 2,
    image: IMG2,
    title: "WeatherApp",
    github: "https://github.com/CptGrave/weather-app",
    demo: "https://cptgrave.github.io/weather-app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Tenzies Game",
    github: "https://github.com/CptGrave/tenzies",
    demo: "https://cptgrave.github.io/tenzies/"
  },
  {
    id: 4,
    image: IMG4,
    title: "MemeGenerator",
    github: "https://github.com/CptGrave/MemeGenerator",
    demo: "https://cptgrave.github.io/MemeGenerator/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Drum-pad",
    github: "https://github.com/CptGrave/drum-pad",
    demo: "https://cptgrave.github.io/drum-pad/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Calculator",
    github: "https://github.com/CptGrave/calculator",
    demo: "https://cptgrave.github.io/calculator/"
  },
  {
    id: 7,
    image: IMG7,
    title: "Random Quote Generator",
    github: "https://github.com/CptGrave/random-quote-generator",
    demo: "https://cptgrave.github.io/random-quote-generator/"
  },
  {
    id: 8,
    image: IMG8,
    title: "Markdown Previewer",
    github: "https://github.com/CptGrave/markdown-previewer",
    demo: "https://cptgrave.github.io/markdown-previewer/"
  },
  {
    id: 9,
    image: IMG9,
    title: "KeySequence app",
    github: "https://github.com/CptGrave/Key-Sequence-Challenge",
    demo: "https://cptgrave.github.io/Key-Sequence-Challenge/"
  },
  {
    id: 10,
    image: IMG10,
    title: "Darts calculator",
    github: "https://github.com/CptGrave/KalkulatorRzutki",
    demo: "https://cptgrave.github.io/KalkulatorRzutki/"
  },
  {
    id: 11,
    image: IMG11,
    title: "Note app",
    github: "https://github.com/CptGrave/NoteApp",
    demo: "https://cptgrave.github.io/NoteApp/"
  },
  {
    id: 12,
    image: IMG12,
    title: "Pomodoro-clock",
    github: "https://github.com/CptGrave/25-5clock",
    demo: "https://cptgrave.github.io/25-5clock/"
  },
]

const portfolioItems = data.map(({ id, image, title, github, demo }) => {
  return (
    <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title}></img>
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank">Github</a>
        <a href={demo} className="btn btn-primary" target="_blank">Live demo</a>
      </div>
    </article>
  )
})

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems}
      </div>
    </section>
  )
}

export default Portfolio