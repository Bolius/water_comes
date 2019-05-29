import React from 'react';
import { Row } from 'reactstrap'


export default class About extends React.Component {
  render() {
    return (
      <Row style={{padding: "10px"}}>
        <p>Bolius har lavet en beregner, som giver dig indblik i, hvad der kan påvirke din boligs risiko
        for oversvømmelse. Ud fra resultatet får du gode råd til, hvad du kan gøre for at sikre din bolig.</p>
      </Row>
    );
  }
}
