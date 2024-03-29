import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lukastrevo@gmail.com</h5>
            <a href="mailto:lukastrevo@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Łukasz Chorąży</h5>
            <a href="https://m.me/lukastrevo" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+48 7979958864</h5>
            <a href="https://api.whatsapp.com/send?phone=797958864" target="_blank">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact