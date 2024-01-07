import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import ContactImage from "../assets/LiangPic1.jpeg";

function Contact() {

const handleSubmit = (e) => {
    e.preventDefault()
}

  return (
    <div className="contact">
      <div className="leftSide" style={ {backgroundImage:`url(${ContactImage})`} }></div>
      <div className="rightSide">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} id="contact-form" method="POST">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" type="text" />
            <label htmlFor="phone">Phone</label>
            <input name="phone" type="text" />
            <label htmlFor="message">Message</label>
            {/* why the text area placeholder doesnt show up???????? */}
            <textarea rows="6" placeholder="leave a message..." name="message"> </textarea>
            <Link to="/"> 
            <button>
                Send Message
            </button>
            </Link>

        </form>
      </div>
    </div>
  )
}

export default Contact
