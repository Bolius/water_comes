import React from 'react';
import styled from 'styled-components';
import { Container as BContainer, Row as BRow, Col, Collapse} from 'reactstrap'
import '../styles/risk.css'

const Container = styled(BContainer)`
  margin: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #EFF9FD
`;

const Row = styled(BRow)`
  font-size: 1.1em;
  font-weight: 500;
  padding: 1em;
`;

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
      <Container>
        <Row>
          <Col sx='6' sm={{size: '9'}}>
             SE DATAGRUNDLAGET HER
          </Col>
          <Col sx='3' sm={{size: '3'}} className="plus-btn" onClick={this.toggle}>
            {this.state.collapse ? '-' : '+'}
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col>
              <p>Vi ved, at der i fremtiden kommer flere og voldsommere vejrhændelser som
              fx skybrud og stormflod. Vi ved også, at det kan være svært at forholde
              sig til et varsel om skybrud eller stormflod, hvis man ikke ved,
              hvor udsat ens bolig er.</p>

              <p>Bolius er uvildige, og vores anbefalinger hviler på offentligt tilgængelige
              data, som vi blandt andet indhenter gennem Bygnings-og Boligregistret (BBR).
              Du skal være opmærksom på, at de offentligedata kan være behæftet med usikkerheder.</p>

              <p>Data kan alene anvendes til at give en overordnet vurdering. Vi anbefaler, at du
              indhenter yderligere informationer, før du fx iværksættertiltag på baggrund af
              forventninger om oversvømmelser.En god ide kan være at bestille et klimatjek,
              der tager udgangspunkt i din boligskonkrete forhold og beliggenhed.</p>

              Relevante links: DHM/Bluespot Ekstremregnhttps://download.kortforsyningen.dk/content/dhmbluespot-ekstremregn
            </Col>
          </Row>
        </Collapse>
      </Container>
    );
  }
}
