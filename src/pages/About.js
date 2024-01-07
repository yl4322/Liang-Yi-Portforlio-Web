import React from "react";
import AboutImage from "../assets/LiangPic4.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <img  src = {AboutImage}/>

      <div className="aboutBottom">
        <h1>ABOUT ME</h1>
        <p>Hello! My name is Liang. Welcome to my website. </p>
        <p>
          I love MUSIC and TECHNOLOGY! My current job is associated with Project
          Management in Civil Engineering Industry. However, technology and
          artistic things in life are something that I've always facinated with.
        </p>
        <p>
          I'm hoping to utilize my Project Management skills along with my
          Front-end Development knowledges to break into Tech Industry, and
          continue to learn, to challenge myself !
        </p>
      </div>
    </div>
  );
}

export default About;
