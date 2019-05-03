import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'jquery/dist/jquery.min';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Footer from '../components/Footer';

import './App.css';

const App = () => {
    return ( 
      
        <Router>
          <div className="app">
          <header>
{<Navigation/>}
{<Header/>}
</header>
<main>
  {<Main/>}
</main>

<footer>{<Footer/>}</footer>
</div>
        </Router>
  
     );
}


export default App;
