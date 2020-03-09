import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NavLinks from './mocks/NavLinks';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar links={NavLinks} />
      <Routes />
    </div>
  );
}

export default App;
