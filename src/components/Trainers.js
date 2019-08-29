import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import TP0S from '../Pictures/TP0S.jpg';
import TP1S from '../Pictures/TP1S.jpg';
import TP2S from '../Pictures/TP2S.jpg';
import TP3S from '../Pictures/TP3S.jpg';
import TP4S from '../Pictures/TP4S.jpg';
import "../style/Trainers.css";


const trainers = [
    {
        id: 0,
        name: 'Andrzej Wawer',
        alias: 'Arni',
        picture: TP0S,
        about: "Incididunt reprehenderit eu reprehenderit sunt dolor labore id. In commodo Lorem laborum commodo laborum aliquip occaecat. Aliquip nulla minim ullamco dolore id dolore. Ullamco irure mollit mollit exercitation ad laborum sit labore ex commodo.loremAmet labore reprehenderit nisi elit est amet sint reprehenderit sit enim do.Ad exercitation duis nulla cupidatat ullamco duis duis nisi ad veniam cupidatat laborum cillum.Lorem culpa voluptate esse ea non exercitation in id mollit irure velit ea. Culpa proident irure esse sint. Mollit adipisicing et aliqua labore voluptate cillum quis velit dolor ex.",
        class: "photo col-md-6 col-lg-4 left"
    },

    {
        id: 1,
        name: 'Weronika Kałuża',
        alias: 'Nikita',
        picture: TP1S,
        about: "Nulla nostrud officia aliqua pariatur labore cupidatat voluptate ipsum culpa laborum elit. Incididunt anim in officia tempor et ea tempor ad sunt consectetur aliquip aute. Ipsum commodo aliqua mollit aliqua eiusmod ut nulla velit qui proident nulla id culpa.Enim nulla veniam esse in ut qui voluptate. Minim deserunt ut laboris veniam voluptate excepteur consectetur dolor excepteur cupidatat ut est amet anim. Ex cupidatat commodo ex labore qui. Veniam do veniam officia quis. Eiusmod irure ullamco ad voluptate aliqua sit minim sunt.Ipsum fugiat cillum id dolor exercitation. Aute ex quis et anim. Minim magna mollit minim aliquip. Cillum nostrud pariatur deserunt irure et exercitation adipisicing mollit laboris minim incididunt magna officia sunt.",
        class: "photo col-md-6 order-md-1 col-lg-4 right"
    },

    {
        id: 2,
        name: 'Victor De Poll',
        alias: 'Czarny',
        picture: TP2S,
        about: "Non pariatur voluptate in tempor excepteur officia deserunt id commodo mollit occaecat aliqua dolor. Sunt eiusmod Lorem nostrud anim est sint elit non dolore quis. Occaecat amet pariatur laboris laborum quis adipisicing elit ullamco laboris nostrud ullamco aliqua Lorem officia. Culpa non et non adipisicing. Consectetur excepteur consequat do adipisicing dolor veniam et nulla elit voluptate aliquip amet enim qui. Ullamco proident id eu non pariatur officia do magna proident non pariatur exercitation.Qui in reprehenderit ad laboris. Incididunt ea velit fugiat consequat deserunt consequat laboris aute aliqua laborum consequat ad enim. Velit ex cillum veniam ea occaecat ullamco ea labore sint cillum Lorem in. Occaecat cillum aute sint anim laborum mollit.",
        class: "photo col-md-6 col-lg-4"
    },

    {
        id: 3,
        name: 'Katarzyna Pyk',
        alias: 'Inga',
        picture: TP3S,
        about: "Laboris nisi labore in ut duis et magna. Magna duis ullamco incididunt cupidatat veniam labore Lorem amet. Minim dolor labore et elit dolore. Est nisi id anim veniam. Magna ut enim minim pariatur officia fugiat qui eu nisi elit pariatur ad sunt. Sit in cillum laboris in ea labore ea. Aliqua ex fugiat incididunt fugiat ex.Cillum aliquip anim id minim dolor aliquip exercitation officia irure occaecat qui commodo laboris minim. Consectetur dolore anim tempor adipisicing eu et voluptate non labore. Aute culpa est elit non. Ut Lorem eu sunt ad Lorem do consequat esse nisi id.Et labore aliqua cupidatat labore sint excepteur laborum deserunt cillum sit esse aute reprehenderit officia. Enim commodo enim duis adipisicing laborum id elit laboris aute et amet. Deserunt enim dolore nisi aute commodo do veniam.",
        class: "photo col-md-6 order-md-1 col-lg-4"
    },


    {
        id: 4,
        name: 'Kamil Dętka',
        alias: 'Denis',
        picture: TP4S,
        about: "Enim consectetur est Lorem deserunt. Lorem qui ad do aliqua anim nostrud aute. Adipisicing sit sint minim velit consequat aliquip ipsum irure non deserunt.Pariatur commodo eiusmod cupidatat amet est. Sint exercitation veniam anim do ullamco elit cillum ea. Do eu mollit et minim Lorem quis magna ad anim eiusmod incididunt anim. Veniam dolore cillum deserunt incididunt irure ex et anim. Ex ipsum tempor est minim laborum occaecat. Velit enim laborum ullamco ea occaecat sunt in amet commodo nisi in in anim. Dolore esse cupidatat eiusmod et anim duis officia.",
        class: "photo col-md-6 col-lg-4"
    }
]
class Trainers extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleDescriptionScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleDescriptionScroll);
    }

    handleDescriptionScroll = () => {

        const t0 = document.getElementById('0');
        const t1 = document.getElementById('1');
        const t2 = document.getElementById('2');
        const t3 = document.getElementById('3');
        const t4 = document.getElementById('4');


        if (window.innerWidth < 600) {

            t0.classList.add('left');

            if (window.scrollY > 550) {
                t1.classList.add('right')
            };

            if (window.scrollY > 1900) {
                t2.classList.add('left')
            };

            if (window.scrollY > 3000) {
                t3.classList.add('right')
            };
            if (window.scrollY > 3800) {
                t4.classList.add('left')
            };
        }


        if (window.innerWidth > 600) {

            if (window.scrollY > 420) {
                t0.classList.add('left')
            };

            if (window.scrollY > 720) {
                t1.classList.add('right')
            };

            if (window.scrollY > 1220) {
                t2.classList.add('left')
            };

            if (window.scrollY > 1420) {
                t3.classList.add('right')
            };

            if (window.scrollY > 1600) {
                t4.classList.add('left')
            };

        }

        if (window.innerWidth > 1000) {

            if (window.scrollY > 400) {
                t0.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 850) {
                t1.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1300) {
                t2.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1950) {
                t3.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2250) {
                t4.classList.add('descriptionAfterScroll')
            };

            
        }

    }


    render() {

        return (
            <>
                <header>
                    <p> Nasi trenerzy</p>
                </header>
                <div className="container">
                    {trainers.map((trainer, id) => (
                        <div className="wrapper row align-items-center" key={trainer.name} id={id}>
                            <div className={trainer.class}>
                                <Image src={trainer.picture} alt={trainer.name}
                                    className="img-responsive trainer" />
                                <div className="caption">
                                    <p>{trainer.name} "{trainer.alias}"</p>
                                </div>
                            </div>
                            <div className="description col-md-6">
                                <p className="italic">{trainer.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Trainers;