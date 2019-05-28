import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <>
            <header>
                <p>Znajdziesz nas tutaj</p>
            </header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307274.751012504!2d-177.17517858042626!3d-3.7516602982465095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65647c91c2028703%3A0x84327d040152c307!2sKiribati!5e0!3m2!1spl!2spl!4v1556744849040!5m2!1spl!2spl" title="map"></iframe>
<div className="container">
            <div className="iconsC row justify-content-around ">
                <div className="iconC col-12 align-self-center"><p> <i className="fas fa-map-marked-alt"></i>ul. Rockowa 66, Szczecin </p></div>
                <div className="iconC col-12 align-self-center"><p> <i className="fas fa-mobile-alt"></i>+48 666 666 666</p></div>
                <div className="iconC col-12 align-self-center"><p> <i className="fas fa-at"></i>fitrock@rock.pl</p></div>
            </div>
        </div>
        </>
    );
}

export default Contact;