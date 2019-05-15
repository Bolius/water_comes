import React from 'react';
import water_header from '../assets/water_header.png'
import "../styles/header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
          <h1>Stormflod</h1>
          <h5>Lorem ipsum yada dada do this</h5>
      </div>
    );
  }
}
