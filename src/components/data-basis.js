import React from 'react';
import {Col} from 'reactstrap';
import LinkList from './link-list.js'

export default class DataBasis extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {

    return (
      <Col className="water-comes-app-data">

          <p>
          Vi ved, at der i fremtiden kommer flere og voldsommere vejrhændelser
          som fx skybrud. Vi ved også, at det kan være svært at forholde sig
          til et varsel om skybrud, hvis man ikke ved, hvor udsat ens bolig
          er.
          </p>

          <p>
          Bolius er uvildige, og vores anbefalinger hviler på offentligt
          tilgængelige data, som vi blandt andet indhenter gennem Bygnings- og
          Boligregistret (BBR). Du skal være opmærksom på, at de offentlige
          data kan være behæftet med usikkerheder.
          </p>

          <p>
            Data kan alene anvendes til at give en overordnet vurdering. Vi
            anbefaler, at du indhenter yderligere informationer, før du fx
            iværksætter tiltag på baggrund af forventninger om oversvømmelser.
            En god ide kan være at bestille et klimatjek, der tager
            udgangspunkt i din boligs konkrete forhold og beliggenhed.
          </p>

          <h4>Vores data er baseret på data fra følgende kilder:</h4>
          <LinkList/>

      </Col>
    );
  }
}
