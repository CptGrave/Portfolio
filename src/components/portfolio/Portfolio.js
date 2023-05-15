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
    demo: "https://cptgrave.github.io/my-library/",
    description: "Uses google books api to create a reading list persisted in local storage."
  },
  {
    id: 2,
    image: IMG2,
    title: "WeatherApp",
    github: "https://github.com/CptGrave/weather-app",
    demo: "https://cptgrave.github.io/weather-app/",
    description: "Search cities by using geodb from rapidapi and shows currend and future weather from openweather api."
  },
  {
    id: 3,
    image: IMG3,
    title: "Tenzies Game",
    github: "https://github.com/CptGrave/tenzies",
    demo: "https://cptgrave.github.io/tenzies/",
    description : "Simple web game in which you suppose to match cubes with the same value. Project created within scrimba front-end course."
  },
  {
    id: 4,
    image: IMG4,
    title: "MemeGenerator",
    github: "https://github.com/CptGrave/MemeGenerator",
    demo: "https://cptgrave.github.io/MemeGenerator/",
    description: "Pick randomly meme image, and put your own text on it."
  },
  {
    id: 5,
    image: IMG5,
    title: "Drum-pad",
    github: "https://github.com/CptGrave/drum-pad",
    demo: "https://cptgrave.github.io/drum-pad/",
    description: "Plays different sounds depend on given key input or click."
  },
  {
    id: 6,
    image: IMG6,
    title: "Calculator",
    github: "https://github.com/CptGrave/calculator",
    demo: "https://cptgrave.github.io/calculator/",
    description: "Simple calculator made in React"
  },
  {
    id: 7,
    image: IMG7,
    title: "Random Quote Generator",
    github: "https://github.com/CptGrave/random-quote-generator",
    demo: "https://cptgrave.github.io/random-quote-generator/",
    description: "Uses random quote api and displays the sentence."
  },
  {
    id: 8,
    image: IMG8,
    title: "Markdown Previewer",
    github: "https://github.com/CptGrave/markdown-previewer",
    demo: "https://cptgrave.github.io/markdown-previewer/",
    description: "Previews given text written in markdown."
  },
  {
    id: 9,
    image: IMG9,
    title: "KeySequence app",
    github: "https://github.com/CptGrave/Key-Sequence-Challenge",
    demo: "https://cptgrave.github.io/Key-Sequence-Challenge/",
    description: "Challenging speed of typing. Game includes high scores stored in local memory"
  },
  {
    id: 10,
    image: IMG10,
    title: "Darts calculator",
    github: "https://github.com/CptGrave/KalkulatorRzutki",
    demo: "https://cptgrave.github.io/KalkulatorRzutki/",
    description: "Helps dart players to count their points. App design created in bootstrap."
  },
  {
    id: 11,
    image: IMG11,
    title: "Note app",
    github: "https://github.com/CptGrave/NoteApp",
    demo: "https://cptgrave.github.io/NoteApp/",
    description: "Add, delete and preview in markdown your own notes. App created within scrimba front-end."
  },
  {
    id: 12,
    image: IMG12,
    title: "Pomodoro-clock",
    github: "https://github.com/CptGrave/25-5clock",
    demo: "https://cptgrave.github.io/25-5clock/",
    description: "Simple counter where user can set interval for work and break time"
  },
]

const portfolioItems = data.map(({ id, image, title, github, demo, description }) => {
  return (
    <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title}></img>
      </div>
      <br></br>
      <h2>{title}</h2>
      <br></br>
      <h4>{description}</h4>
      <br></br>
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
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems}
      </div>
    </section>
  )
}

export default Portfolio