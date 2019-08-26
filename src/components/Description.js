
import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import '../style/Description.css';

const descriptions = [

    {
        id: 0,
        title: 'morning power!',
        badge: <Badge variant="success" title="poziom trudności-1/3">*</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',

    },

    {
        id: 1,
        title: 'kaloryfer',
        badge: <><Badge variant="success" title="poziom trudności-1/3" >*</Badge> <Badge variant="danger">New!</Badge></>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',

    },

    {
        id: 2,
        title: 'rzeźba',
        badge: <Badge variant="warning" title="poziom trudności-2/3" >**</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },

    {
        id: 3,
        title: 'hardcore',
        badge: <><Badge variant="danger" title="poziom trudności-3/3" >***</Badge> <Badge variant="danger">New!</Badge></>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',

    },
    {
        id: 4,
        title: 'burn it!',
        badge: <Badge variant="danger" title="poziom trudności-3/3">***</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
    {
        id: 5,
        title: 'mocarz',
        badge: <Badge variant="warning" title="poziom trudności-2/3" >**</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
    {
        id: 6,
        title: 'zen',
        badge: <Badge variant="success" title="poziom trudności-1/3" >*</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
    {
        id: 7,
        title: 'wyciskacz',
        badge: <Badge variant="warning" title="poziom trudności-2/3">**</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
    {
        id: 8,
        title: 'goodnight fat!',
        badge: <Badge variant="success" title="poziom trudności-1/3">*</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
]


class Description extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleDescriptionScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleDescriptionScroll);
    }

    handleDescriptionScroll = () => {

        const s0 = document.getElementById('0');
        const s1 = document.getElementById('1');
        const s2 = document.getElementById('2');
        const s3 = document.getElementById('3');
        const s4 = document.getElementById('4');
        const s5 = document.getElementById('5');
        const s6 = document.getElementById('6');
        const s7 = document.getElementById('7');
        const s8 = document.getElementById('8');

        if (window.innerWidth < 600) {

            s0.classList.add('descriptionAfterScroll');

            if (window.scrollY > 820) {
                s1.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1520) {
                s2.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2520) {
                s3.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 3250) {
                s4.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 3820) {
                s5.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 4620) {
                s6.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 5520) {
                s7.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 6220) {
                s8.classList.add('descriptionAfterScroll')
            };
        }


        if (window.innerWidth > 600) {

            if (window.scrollY > 420) {
                s0.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 720) {
                s1.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1020) {
                s2.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1320) {
                s3.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1620) {
                s4.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2150) {
                s5.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2250) {
                s6.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 3000) {
                s7.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 3220) {
                s8.classList.add('descriptionAfterScroll')
            };
        }

        if (window.innerWidth > 600) {

            if (window.scrollY > 400) {
                s0.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 700) {
                s1.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1350) {
                s2.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1550) {
                s3.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1750) {
                s4.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 1950) {
                s5.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2200) {
                s6.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2500) {
                s7.classList.add('descriptionAfterScroll')
            };

            if (window.scrollY > 2700) {
                s8.classList.add('descriptionAfterScroll')
            };
        }

    }

    render() {
        return (<>
            <header>
                <p className="title">Opis zajęć</p>
            </header>
            <article>
                <div> {descriptions.map((description, id) => (
                    <section key={description.title} className={'descriptionBeforeScroll col-md-6 row justify-content-center wrapper'} id={id} >
                        <h3 className="descriptionh3" key={descriptions.id} >{description.title} {description.badge}</h3>
                        <p className='description'  >{description.description}</p>
                    </section>))}
                </div>
            </article>
        </>);
    }
}


export default Description;
