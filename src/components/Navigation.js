import React from 'react';

import {Navbar, Nav}from 'react-bootstrap';
import logo from '../Pictures/logo.png';
import './Navigation.css'








const Navigation = () => {
    
    return ( 
<Navbar bg="danger" expand="md" variant="dark">
  <Navbar.Brand href="/"exact><img className="logo" src={logo} alt="logo"/> Fit<span className="rock">rock!</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"exact>O nas</Nav.Link>
      <Nav.Link href="/Offer">Oferta</Nav.Link>
      <Nav.Link href="/Schedule">Grafik</Nav.Link>
      <Nav.Link href="/Description">Opis zajęć</Nav.Link>
      <Nav.Link href="/Trainers">Trenerzy</Nav.Link>
      <Nav.Link href="/Contact">Kontakt</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
       
        );
}
 
export default Navigation;