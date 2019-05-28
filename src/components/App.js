import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';


const App = () => {
    return ( 
      
        <Router>
          <div className="app">
          <header>
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
