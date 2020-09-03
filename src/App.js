import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSegment, IonSegmentButton, IonPage, IonTab, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from '@ionic/react';

// Routing
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

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

// Page skeleton content (IonSegmentButtons and )
const BrewPage = () => (
  <IonPage>
    <IonSegment value="cappuccino">
      <IonSegmentButton value="espresso">Espresso</IonSegmentButton>
      <IonSegmentButton value="macchiato">Macchiato</IonSegmentButton>
      <IonSegmentButton value="cappuccino">Cappuccino</IonSegmentButton>
    </IonSegment>
    <IonButton expand="full">Brew</IonButton>
  </IonPage>
);

const SettingsPage = () => (
  <IonPage>Settings</IonPage>
);


function App() {
  return (
    <IonApp>
      <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Brewster</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTabs>
          {/*<!-- Look into IonRouterOutlet vs Switch -->*/}
          <IonRouterOutlet>
            <Route path="/" component={BrewPage} exact/>
            <Route path="/settings" component={SettingsPage} exact/>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {/*<!-- It seems you can name the tab properties whatever you want as long as the href is a proper route -->*/}
            <IonTabButton tab="brew" href="/">
              <IonLabel>Brew</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
