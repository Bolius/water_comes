import React from 'react';
import styled from 'styled-components';
import Header from './components/header.js'
import Main from './main.js'


const BaseStyle = styled.div`
  font-family: "roboto", sans-serif;
  font-weight: 300;
`;

function App() {
  return (
      <BaseStyle>
        <Header/>
        <Main/>
      </BaseStyle>
  );
}

export default App;
