import React from 'react';
import { Row, Col } from 'reactstrap'


export default class About extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h5>Tjek risikoen for, at din bolig bliver oversvømmet ved skybrud eller stormflod</h5>
          </Col>
        </Row>
        <Row>
            <Col>
            <p>Vi ved, at der i fremtiden kommer flere og voldsommere vejrhændelser som fx skybrud og stormflod.
            Vi ved også, at det kan være svært at forholde sig til et varsel om skybrud eller stormflod, hvis
            man ikke ved, hvor udsat ens bolig er.</p>

            <p>Derfor har Bolius lavet en beregner, som giver dig indblik i, hvad der kan påvirke din boligs risiko
            for oversvømmelse. Ud fra resultatet får du gode råd til, hvad du kan gøre for at sikre din bolig.</p>
          </Col>
          <Col>
            <p>Bolius er uvildige, og vores anbefalinger hviler på offentligt tilgængelige data, som vi blandt andet
            indhenter gennem Bygnings- og Boligregistret (BBR). Du skal være opmærksom på, at de offentligedata
            kan være behæftet med usikkerheder. Dem kan du læse mere om her.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
