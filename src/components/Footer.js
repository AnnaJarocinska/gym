import React from 'react';
import logo from '../Pictures/logo.png';
import '../style/Footer.css'

const Footer = () => {
    return (<>
        <div className="footer">
            <div className="logo">
                <img src={logo} className="logoH" alt="logo" />
                <h2>Fit<span className="rock">ROCK!</span></h2>
            </div>

            <div className="icons">
                <i className="fab fa-facebook-square"></i>

                <i className="fab fa-instagram"></i>

                <i className="fab fa-twitter-square"></i>
            </div>
        </div>

    </>);
}

export default Footer;