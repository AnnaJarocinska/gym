import React from 'react';
import './Home.css'
import Reasons from './Reasons';

const Home = () => {
    return (
     <>
      <header>
        <p>Dlaczego my?</p>
    </header>
    {<Reasons/>}
    </> );
}
 
export default Home;