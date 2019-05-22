import React from 'react';
import Header from './components/header.js'
import AboutSite from './components/about.js'
//import AdressSelect from './components/address_select.js'
import MapBox from './components/map_box.js'

function App() {
  return (
    <div>
      <Header/>
      <AboutSite/>
      {/* <AdressSelect/> Benjamin does this */}
      <MapBox address={"Lyngbyvej 160"}/>
    </div>
  );
}

export default App;
