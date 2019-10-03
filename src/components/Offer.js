import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../Pictures/logo.png';
import '../style/Offer.css';

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
        title: 'gym gold',
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

        <div className="offerContainer col-sm-12" key ={variant.title}>
            <h3>{name} {variant.title}</h3>
            <img className="logoOffer" src={logo} alt="logo" />
            <p>{variant.gym}</p>
            <p>{variant.group}</p>
            <p>{variant.trainer}</p>
            <p className="price">{variant.price} za miesiąc
                <Button variant="secondary"> Kup teraz </Button></p>
        </div>
    ))

    return (

        <div className="row">
            {offer}
        </div>
    )
}

export default Offer;