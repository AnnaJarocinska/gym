import React from 'react';
import './Header.css';
import Slider from './Slider';
import Navigation from './Navigation';



const Header = () => {
    return (<div>

{<Navigation/>}
    
     {<Slider/>}
   
    </div>
    );
}
 
export default Header;