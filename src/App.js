import React from 'react';
import './App.css';
import About from "../src/components/about/About"
import Contact from "../src/components/contact/Contact"
import Experience from "../src/components/experience/Experience"
import Footer from "../src/components/footer/Footer"
import Header from "../src/components/header/Header"
import Nav from "../src/components/nav/Nav"
import Portfolio from "../src/components/portfolio/Portfolio"

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
