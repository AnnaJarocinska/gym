import React from 'react';
import Nav  from 'react-bootstrap/Nav';
import '../style/Navweek.css'


const Navweek = () => {
    return ( 
<Nav defaultActiveKey="/home" className="flex-column d-md-none">
  <Nav.Link href="#monday">Poniedziałek</Nav.Link>
  <Nav.Link href="#tuesday">Wtorek</Nav.Link>
  <Nav.Link href="#wednesday">Środa</Nav.Link>
  <Nav.Link href="#thursday">Czwartek</Nav.Link>
  <Nav.Link href="#friday">Piątek</Nav.Link>
  <Nav.Link href="#saturday">Sobota</Nav.Link>
  <Nav.Link href="#sunday">Niedziela</Nav.Link>
</Nav>
     );
}
 
export default Navweek;