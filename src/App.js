import React from 'react';
import Header from './components/header.js'
import AboutSite from './components/about.js'
import AdressSelect from './components/address_select.js'
import ActionHandler from './views/action-handler.js'
import { Container } from 'reactstrap'
function App() {
  return (
      <div>
        <Header/>
        <Container>
          <AboutSite/>
          <AdressSelect/>
          <ActionHandler/>
        </Container>
      </div>
  );
}

export default App;
