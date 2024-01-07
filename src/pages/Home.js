import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/LiangPic2.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={ {backgroundImage:`url(${BannerImage})`} }>
      <div className="headerContainer"> 
        <h1>Have You Met Liang?</h1>
        <Link to="/about">
        <button> About Liang </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
