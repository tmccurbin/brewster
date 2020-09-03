import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSegment, IonSegmentButton, IonPage } from '@ionic/react';

// IMPORTANT: Import core CSS in order to get proper rendering
// This is the first tier of CSS
// This can be places in index.js instead
import '@ionic/react/css/core.css'

// This is the second tier of CSS
// This helpf to make the CSS consistent across devices
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// This is the third tier of CSS
// This gives the Ionic look and feel
// This is optional
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Brewster</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonPage>
          <IonSegment value="cappuccino">
            <IonSegmentButton value="espresso">Espresso</IonSegmentButton>
            <IonSegmentButton value="macchiato">Macchiato</IonSegmentButton>
            <IonSegmentButton value="cappuccino">Cappuccino</IonSegmentButton>
          </IonSegment>
          <IonButton expand="full">Brew</IonButton>
        </IonPage>
      </IonContent>
    </IonApp>
  );
}

export default App;
