import React from 'react';
import ctLogo from './images/ctLogo.png';
import './App.css';
import CarbonData from './components/CarbonData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ctLogo} className="App-logo" alt="logo" />
        <h2 className='Title'>Carbon Tracking App</h2>
      </header>
      <div className='graph'>
        <CarbonData />
      </div>
    </div>
  );
}

export default App;
