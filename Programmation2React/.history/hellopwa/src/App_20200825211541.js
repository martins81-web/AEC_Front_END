import React from 'react';
import logo from './img/pwa.png';
import BoutonInstallPWA from './Components/BoutonInstallPWA';
import DemoJSONLocal from './Components/DemoJSONLocal';
import './App.css';

function App() {
  return (
    <div className="App">
      <BoutonInstallPWA/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100 px" height="25 px"/>
        <p>
          Hello PWA World!
        </p>
      </header>
      <DemoJSONLocal/>
    </div>
  );
}

export default App;