import React from 'react';
import { Row } from 'reactstrap'


export default class About extends React.Component {
  render() {
    return (
      <Row style={{padding: "10px"}}>
        <h5>Tjek risikoen for, at din bolig bliver oversvømmet ved skybrud eller stormflod</h5>

        <p>Indtast din adresse og fåindblik i, hvad der kan påvirke din boligs risiko
        for oversvømmelse. Ud fra resultatet får du gode råd til, hvad du kan gøre for
        at sikre din bolig.</p>

      </Row>
    );
  }
}
