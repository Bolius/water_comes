import React from 'react';
import Header from './components/header.js'
import AboutSite from './components/about.js'
import AdressSelect from './components/address_select.js'
import GoogleApiWrapper from './components/map_box.js'
import Recommendations from './views/recom.js'
import ActionHandler from './views/action-handler.js'
import { Container } from 'reactstrap'
function App() {
  return (
      <div>
        <Header/>
        <Container>
          <AboutSite/>
          <AdressSelect/>
          <GoogleApiWrapper address={"Jarmers Plads 1, 1551 København"} />
          <ActionHandler/>
          <Recommendations/>
        </Container>
      </div>
  );
}

export default App;
