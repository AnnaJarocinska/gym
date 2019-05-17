import React from 'react';
import Button from 'react-bootstrap/Button';
import './Offer.css';
import logo from '../trainersPictures/logo.png';


const name = <><p>Fit <span className="rock">rock</span> </p></>
const variants = [
    {
        id: 0,
        title: 'open',
        gym: 'nieograniczony wstęp na siłownię',
        group: 'nieograniczony udział w zajęciach grupowych',
        trainer: null,
        price: '150 zł'
    },

    {
        id: 1,
        title: 'gym',
        gym: 'nieograniczony wstęp na siłownię',
        group: null,
        trainer: null,
        price: '75 zł'
    },

    {
        id: 2,
        title: 'gym premium',
        gym: 'nieograniczony wstęp na siłownię',
        group: null,
        trainer: 'plan treningowy i opieka trenera w pakiecie',
        price: '150 zł'
    },

    {
        id: 3,
        title: 'group',
        gym: null,
        group: 'nieograniczony udział w zajęciach grupowych',
        trainer: null,
        price: '100 zł'
    },

    {
        id: 4,
        title: 'student open',
        gym: 'nieograniczony wstęp na siłownię',
        group: 'nieograniczony udział w zajęciach grupowych',
        trainer: null,
        price: '120 zł'
    },

    {
        id: 5,
        title: 'student group',
        gym: null,
        group: 'nieograniczony udział w zajęciach grupowych',
        trainer: null,
        price: '75 zł'
    },




]


const Offer = () => {
    let offer = variants.map(variant => (

        <div className="offerContainer col-lg-4 align-self-end flex-column">
            <div className="offerContent">
                <h3>{name} {variant.title}</h3>
                <img className="logoOffer" src={logo} alt="logo" />
                <p>{variant.gym}</p>
                <p>{variant.group}</p>
                <p>{variant.trainer}</p>
                <p>{variant.price} za miesiąc</p>
                <p className="align-self-end"><Button variant="secondary"> Kup teraz </Button></p>
            </div>
        </div>

    ))





    return (

        <div className="container">
            <div className="row col-lg-10 justify-content-end">
                {offer}
            </div>
        </div>);
}

export default Offer;