import React from 'react';
import { Row } from 'reactstrap'
import '../styles/action.css'

export default class About extends React.Component {
  render() {
    return (
      <Row style={{padding: "10px"}}>
        <h5>Tjek risikoen for, at din bolig bliver oversvømmet ved skybrud</h5>

        <p>
          Indtast din adresse og få indblik i, hvad der kan påvirke din boligs
          risiko for oversvømmelse. Ud fra resultatet får du gode råd til, hvad du
          kan gøre for at sikre din bolig.
        </p>

      </Row>
    );
  }
}
