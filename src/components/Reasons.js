import React from 'react';

import W0S from '../trainersPictures/W0S.jpg';
import W1S from '../trainersPictures/W1S.jpg';
import W2S from '../trainersPictures/W2S.jpg';
import W3S from '../trainersPictures/W3S.jpg';
import W4M from '../trainersPictures/W4M.jpg';
import W5S from '../trainersPictures/W5S.jpg';
import W6S from '../trainersPictures/W6S.jpg';
import './Reasons.css'


const reasons = [
    {
        id: 0,
        watchword: 'Gramy tylko rock i metal',
        picture: W0S,
        about: "Incididunt reprehenderit eu reprehenderit sunt dolor labore id. In commodo Lorem laborum commodo laborum aliquip occaecat. Aliquip nulla minim ullamco dolore id dolore. Ullamco irure mollit mollit exercitation ad laborum sit labore ex commodo.loremAmet labore reprehenderit nisi elit est amet sint reprehenderit sit enim do.Ad exercitation duis nulla cupidatat ullamco duis duis nisi ad veniam cupidatat laborum cillum.Lorem culpa voluptate esse ea non exercitation in id mollit irure velit ea. Culpa proident irure esse sint. Mollit adipisicing et aliqua labore voluptate cillum quis velit dolor ex."
    },

    {
        id: 1,
        watchword: 'Mamy czynne 24h',
        picture: W1S,
        about: "Nulla nostrud officia aliqua pariatur labore cupidatat voluptate ipsum culpa laborum elit. Incididunt anim in officia tempor et ea tempor ad sunt consectetur aliquip aute. Ipsum commodo aliqua mollit aliqua eiusmod ut nulla velit qui proident nulla id culpa.Enim nulla veniam esse in ut qui voluptate. Minim deserunt ut laboris veniam voluptate excepteur consectetur dolor excepteur cupidatat ut est amet anim. Ex cupidatat commodo ex labore qui. Veniam do veniam officia quis. Eiusmod irure ullamco ad voluptate aliqua sit minim sunt.Ipsum fugiat cillum id dolor exercitation. Aute ex quis et anim. Minim magna mollit minim aliquip. Cillum nostrud pariatur deserunt irure et exercitation adipisicing mollit laboris minim incididunt magna officia sunt."
    },

    {
        id: 2,
        watchword: 'Najlepsi trenerzy',
        picture: W2S,
        about: "Non pariatur voluptate in tempor excepteur officia deserunt id commodo mollit occaecat aliqua dolor. Sunt eiusmod Lorem nostrud anim est sint elit non dolore quis. Occaecat amet pariatur laboris laborum quis adipisicing elit ullamco laboris nostrud ullamco aliqua Lorem officia. Culpa non et non adipisicing. Consectetur excepteur consequat do adipisicing dolor veniam et nulla elit voluptate aliquip amet enim qui. Ullamco proident id eu non pariatur officia do magna proident non pariatur exercitation.Qui in reprehenderit ad laboris. Incididunt ea velit fugiat consequat deserunt consequat laboris aute aliqua laborum consequat ad enim. Velit ex cillum veniam ea occaecat ullamco ea labore sint cillum Lorem in. Occaecat cillum aute sint anim laborum mollit."
    },

    {
        id: 3,
        watchword: 'Świetny sprzęt',
        picture: W3S,
        about: "Laboris nisi labore in ut duis et magna. Magna duis ullamco incididunt cupidatat veniam labore Lorem amet. Minim dolor labore et elit dolore. Est nisi id anim veniam. Magna ut enim minim pariatur officia fugiat qui eu nisi elit pariatur ad sunt. Sit in cillum laboris in ea labore ea. Aliqua ex fugiat incididunt fugiat ex.Cillum aliquip anim id minim dolor aliquip exercitation officia irure occaecat qui commodo laboris minim. Consectetur dolore anim tempor adipisicing eu et voluptate non labore. Aute culpa est elit non. Ut Lorem eu sunt ad Lorem do consequat esse nisi id.Et labore aliqua cupidatat labore sint excepteur laborum deserunt cillum sit esse aute reprehenderit officia. Enim commodo enim duis adipisicing laborum id elit laboris aute et amet. Deserunt enim dolore nisi aute commodo do veniam."
    },


    {
        id: 4,
        watchword: 'Jasne warunki i niskie ceny',
        picture: W4M,
        about: "Enim consectetur est Lorem deserunt. Lorem qui ad do aliqua anim nostrud aute. Adipisicing sit sint minim velit consequat aliquip ipsum irure non deserunt.Pariatur commodo eiusmod cupidatat amet est. Sint exercitation veniam anim do ullamco elit cillum ea. Do eu mollit et minim Lorem quis magna ad anim eiusmod incididunt anim. Veniam dolore cillum deserunt incididunt irure ex et anim. Ex ipsum tempor est minim laborum occaecat. Velit enim laborum ullamco ea occaecat sunt in amet commodo nisi in in anim. Dolore esse cupidatat eiusmod et anim duis officia."
    },

    {
        id: 5,
        watchword: 'Zadowoleni klienci',
        picture: W5S,
        about: "Enim consectetur est Lorem deserunt. Lorem qui ad do aliqua anim nostrud aute. Adipisicing sit sint minim velit consequat aliquip ipsum irure non deserunt.Pariatur commodo eiusmod cupidatat amet est. Sint exercitation veniam anim do ullamco elit cillum ea. Do eu mollit et minim Lorem quis magna ad anim eiusmod incididunt anim. Veniam dolore cillum deserunt incididunt irure ex et anim. Ex ipsum tempor est minim laborum occaecat. Velit enim laborum ullamco ea occaecat sunt in amet commodo nisi in in anim. Dolore esse cupidatat eiusmod et anim duis officia."
    },

    {
        id: 6,
        watchword: 'Niesamowite efekty',
        picture: W6S,
        about: "Enim consectetur est Lorem deserunt. Lorem qui ad do aliqua anim nostrud aute. Adipisicing sit sint minim velit consequat aliquip ipsum irure non deserunt.Pariatur commodo eiusmod cupidatat amet est. Sint exercitation veniam anim do ullamco elit cillum ea. Do eu mollit et minim Lorem quis magna ad anim eiusmod incididunt anim. Veniam dolore cillum deserunt incididunt irure ex et anim. Ex ipsum tempor est minim laborum occaecat. Velit enim laborum ullamco ea occaecat sunt in amet commodo nisi in in anim. Dolore esse cupidatat eiusmod et anim duis officia."
    },
]

const Reasons = () => {


    let why = reasons.map(reason => (
        <>
            <div className="reasons">
                <div className="reasonContainer mx-auto d-block col-lg-10">
                    <div className="reason" style={{ backgroundImage: "url(" + reason.picture + ")" }}>
                        <div className="bgContainer">
                            <p>{reason.watchword}</p>
                        </div>
                    </div>
                </div>
                <div className="description mx-auto d-block col-lg-10 d-lg-none">
                    <p>{reason.about}</p></div>
            </div>
        </>
    ))



    return (<>
        <p>{why}</p>
    </>);
}

export default Reasons;