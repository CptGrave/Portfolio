import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import React from 'react'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "tytul projektu",
    github: "link do githuba",
    demo: "link do livedemo"
  },
  {
    id: 2,
    image: IMG2,
    title: "tytul projektu",
    github: "link do githuba",
    demo: "link do livedemo"
  }
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