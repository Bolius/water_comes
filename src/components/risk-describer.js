import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import Risk from './risk.js'
import Risks from '../risks.json'
import styled from 'styled-components';

const RiskHeader = styled(Col)`
  font-size: 1.3em;
  font-weight: 600;
  background-color: #D5EFF9;
  padding: 0.8em;
`;

const RiskSummary = styled(Row)`
  padding: 1em;
  color: #3687B7;
  font-weight: 600;
  font-size: 1.2em;
  background-color: #EFF9FD;
`;

export default class RiskDescriber extends React.Component {
  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    return (<Container>
      <Row>
        <RiskHeader>
          Faktorer, der påvirker boligens risiko ved {this.props.type}
        </RiskHeader>
      </Row>
      <RiskSummary>
        <Col sm={{size: '3'}}>
          <img src={riskImage} style={{height: '64px'}} className="img-fluid" alt="Risiko måler"/>
        </Col>
        <Col sm={{size: '9'}}>
          {this.props.riskText}
        </Col>
      </RiskSummary>
      <Row>
        {
          Risks.map((r, k) => (
            <Risk key={k}
              title={r.title}
              level={r.level}
              description={r.description}
            />
        ))
      }
      </Row>
    </Container>);
  }
}
