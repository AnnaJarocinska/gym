import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import HashRouter from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../style/App.css';


const App = () => {
  return (

    <HashRouter>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer><Footer /></footer>
      </div>
    </HashRouter>

  );
}


export default App;
