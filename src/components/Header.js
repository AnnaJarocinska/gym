import React from 'react';
import './Header.css';
import Slider from '../components/Slider';
import Navigation from '../components/Navigation';



const Header = () => {
    return (<div>

{<Navigation/>}
    
     {<Slider/>}
   
    </div>
    );
}
 
export default Header;