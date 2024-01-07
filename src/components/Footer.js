import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Footer.css"
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";



function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a href="https://instagram.com/yliang96?igshid=OGQ5ZDc2ODk2ZA==">
            <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006377778914">
            <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/yliang96/">
            <LinkedInIcon />
        </a>
        <a href="https://github.com/yl4322">
            <GitHubIcon />
        </a>
        </div> 
        <p>&copy; 2023 Yi Liang</p>
        <div className="footerNote">All Rights Reserved </div>
         
   
    </div>
  )
}

export default Footer;
