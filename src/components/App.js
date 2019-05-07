import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import Playlist from '../components/Playlist';


import './App.css';


const App = () => {
    return ( 
      
        <Router>
          <div className="app">
          <header>
 {<Header/>}
</header>
<main>
  {<Playlist/>}
  
  {<Main/>}
 
</main>

<footer>{<Footer/>}</footer>
</div>
        </Router>
  
     );
}


export default App;
