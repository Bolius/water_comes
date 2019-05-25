import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import Risk from './risk.js'
import '../styles/risk-describer.css'
import Risks from '../risks.json'

export default class RiskDescriber extends React.Component {
  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    return (<Container>
      <Row>
        <Col className="risk-header">
          Faktorer, der påvirker boligens risiko ved {this.props.type}
        </Col>
      </Row>
      <Row className="risk-summary">
        <Col sm={{size: '3'}}>
          <img src={riskImage} className="img-fluid" alt="Risiko måler"/>
        </Col>
        <Col sm={{size: '9'}}>
          {this.props.riskText}
        </Col>
      </Row>
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
