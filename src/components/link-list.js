// Mainly as a way to keep scrool
import React from 'react';

export default class LinkList extends React.Component {
  componentDidMount() {
    window.scrollBy({
      top: 500,
      behavior: 'smooth'
    });
   }
  render() {
    window.scrollBy({
      top: 500,
      behavior: 'smooth'
    });
    return (
      <ul>
        <li> <a rel="noopener noreferrer" target="_blank" href="https://download.kortforsyningen.dk/content/dhmbluespot-ekstremregn">
          Lavinger i Danmark
        </a></li>
        <li> <a rel="noopener noreferrer" target="_blank" href="https://download.kortforsyningen.dk/content/dhmnedb%C3%B8r">
          Model over nedbør
        </a></li>
        <li> <a rel="noopener noreferrer" target="_blank" href="https://bbr.dk/">
          BBR registret
        </a></li>
        <li> <a rel="noopener noreferrer" target="_blank" href="https://sdfe.dk/hent-data/danmarks-hoejdemodel/">
          Danmark Højde model
        </a></li>
      </ul>
    );
  }
}
