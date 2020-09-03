import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

// IMPORTANT: Import core CSS in order to get proper rendering
// This can be places in index.js instead
import '@ionic/react/css/core.css'

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Brewster</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </IonContent>
    </IonApp>
  );
}

export default App;
