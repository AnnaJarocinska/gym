import React from 'react';
import logo from '../trainersPictures/logo.png';
import './Footer.css'

const Footer = () => {
    return (<>
<div className="footer">
<div className="logo">
     <img src={logo} className="logoH"/>
     <h2>Fit<span className="rock">ROCK!</span></h2>
     </div>

     <div className="icons">
    <i className="fab fa-facebook-square"></i>

    <i className="fab fa-instagram"></i>

    <i className="fab fa-twitter-square"></i>
</div>
</div>
    
    </>  );
}
 
export default Footer;