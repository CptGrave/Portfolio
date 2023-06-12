import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.png"
import React from 'react'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Reed (in development)",
    github: "https://github.com/CptGrave/my-library",
    demo: "https://cptgrave.github.io/my-library/",
    description: "Personal library web application. This is the app I spend the most time with recently. It uses Google Books API. Users can find, add, and rate books that they read. I worked on this project with my friends - one of them is an experienced software developer, who pointed out some bugs, and mistakes and reviewed my code. Another is a UI/UX designer who created a mockup in Figma that I used for inspiration. Check the links below! To see the app in full potential add at least 10 books"
  },
  {
    id: 2,
    title: "WeatherApp",
    github: "https://github.com/CptGrave/weather-app",
    demo: "https://cptgrave.github.io/weather-app/",
    description: "Search cities by using geodb from rapidapi and shows currend and future weather from openweather api."
  },
  {
    id: 3,
    title: "Tenzies Game",
    github: "https://github.com/CptGrave/tenzies",
    demo: "https://cptgrave.github.io/tenzies/",
    description: "Simple web game in which you suppose to match cubes with the same value. Project created within scrimba front-end course."
  },
  {
    id: 4,
    title: "MemeGenerator",
    github: "https://github.com/CptGrave/MemeGenerator",
    demo: "https://cptgrave.github.io/MemeGenerator/",
    description: "Pick randomly meme image, and put your own text on it."
  },
  {
    id: 5,
    title: "Calculator",
    github: "https://github.com/CptGrave/calculator",
    demo: "https://cptgrave.github.io/calculator/",
    description: "Simple calculator made in React"
  },
  {
    id: 6,
    title: "Random Quote Generator",
    github: "https://github.com/CptGrave/random-quote-generator",
    demo: "https://cptgrave.github.io/random-quote-generator/",
    description: "Uses random quote api and displays the sentence."
  },
  {
    id: 7,
    title: "Markdown Previewer",
    github: "https://github.com/CptGrave/markdown-previewer",
    demo: "https://cptgrave.github.io/markdown-previewer/",
    description: "Previews given text written in markdown."
  },
  {
    id: 8,
    title: "KeySequence app",
    github: "https://github.com/CptGrave/Key-Sequence-Challenge",
    demo: "https://cptgrave.github.io/Key-Sequence-Challenge/",
    description: "Challenging speed of typing. Game includes high scores stored in local memory"
  },
  {
    id: 9,
    title: "Darts calculator",
    github: "https://github.com/CptGrave/KalkulatorRzutki",
    demo: "https://cptgrave.github.io/KalkulatorRzutki/",
    description: "Helps dart players to count their points. App design created in bootstrap."
  },
  {
    id: 10,
    title: "Note app",
    github: "https://github.com/CptGrave/NoteApp",
    demo: "https://cptgrave.github.io/NoteApp/",
    description: "Add, delete and preview in markdown your own notes. App created within scrimba front-end."
  },
  {
    id: 11,
    title: "Pomodoro-clock",
    github: "https://github.com/CptGrave/25-5clock",
    demo: "https://cptgrave.github.io/25-5clock/",
    description: "Simple counter where user can set interval for work and break time"
  },
]

const portfolioItemsOther = data.slice(1).map(({ id, title, github, demo, description }) => {
  return (
    <>
      <article key={id} className="portfolio__item other">
        <h2>{title}</h2>
        <br></br>
        <h4>{description}</h4>
        <br></br>
        <div className="portfolio__item-cta">
          <a href={github} className="btn" target="_blank">Github</a>
          <a href={demo} className="btn btn-primary" target="_blank">Live demo</a>
        </div>
      </article>
    </>
  )
})

const portfolioMain = (data) => {
  return (
    <>
      <div className="main">
        <article key={data[0].id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={data[0].image} alt={data[0].title}></img>
          </div>
          <br></br>
          <h2>{data[0].title}</h2>
          <br></br>
          <h4>{data[0].description}</h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href={data[0].github} className="btn" target="_blank">Github</a>
            <a href={data[0].demo} className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article></div>
    </>
  )
}

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioMain(data)}
        <h2>My other projects</h2>
        <div className="others"
        >
          {portfolioItemsOther}
        </div>
      </div>
    </section>
  )
}

export default Portfolio