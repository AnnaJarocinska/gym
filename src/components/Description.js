
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './Description.css';

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
        badge: <Badge variant="warning"title="poziom trudności-2/3" >**</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },

    {
        id: 3,
        title: 'hardcore',
        badge: <><Badge variant="danger"title="poziom trudności-3/3" >***</Badge> <Badge variant="danger">New!</Badge></>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',

    },
    {
        id: 4,
        title: 'burn it!',
        badge:<Badge variant="danger" title="poziom trudności-3/3">***</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
    {
        id: 5,
        title: 'mocarz',
        badge: <Badge variant="warning"title="poziom trudności-2/3" >**</Badge>,
        description: 'Officia sint nostrud culpa pariatur et veniam velit incididunt in ullamco pariatur laborum. Consectetur aliquip reprehenderit sunt reprehenderit mollit non veniam. Nostrud esse aliqua duis officia occaecat commodo Lorem ad exercitation anim magna cupidatat mollit. Reprehenderit ipsum anim ipsum laboris do officia. Esse irure est eu adipisicing adipisicing mollit consequat pariatur nostrud.Ipsum aliquip aliquip nisi eu deserunt nulla Lorem cillum officia non amet. Minim ut occaecat anim elit aliquip duis ut. Consequat dolor laboris do enim dolore irure. Do et fugiat sint in tempor fugiat ipsum irure non nisi ipsum. Do exercitation voluptate minim id',
    },
    {
        id: 6,
        title: 'zen',
        badge: <Badge variant="success"title="poziom trudności-1/3" >*</Badge>,
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

const Description = () => {
let desc = descriptions.map(description =>(
    <section className="description">
    <h3>{description.title} {description.badge}</h3>
    <p>{description.description}</p>
    </section>
))



return(
    <>
    <header>
        <p>Opis zajęć</p>
    </header>
    <article>
        {desc}
    </article>
    </>
)
       

     




    
}

export default Description;