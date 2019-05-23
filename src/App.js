import React from 'react';
import styled from 'styled-components';
import Header from './components/header.js'
import AboutSite from './components/about.js'
import AdressSelect from './components/address_select.js'
import GoogleApiWrapper from './components/map_box.js'
import Recommendations from './views/recom.js'
import ActionHandler from './views/action-handler.js'
import { Container } from 'reactstrap'


const BaseStyle = styled.div`
  font-family: "roboto", sans-serif;
  font-weight: 300;
`;

function App() {
  return (
      <BaseStyle>
        <Header/>
        <Container>
          <AboutSite/>
          <AdressSelect/>
          <GoogleApiWrapper address={"Jarmers Plads 1, 1551 København"} />
          <ActionHandler/>
          <Recommendations/>
        </Container>
      </BaseStyle>
  );
}

export default App;
