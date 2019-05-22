import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import Risk from './risk.js'
import '../styles/risk-describer.css'

export default class RiskDescriber extends React.Component {
  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    return (<Container>
      <Row>
        <Col className="risk-header">
          Risikofaktorer ved {this.props.type}
        </Col>
      </Row>
      <Row className="risk-summary">
        <Col sm={{size: '3'}}>
          <img className="rounded-circle" src={riskImage} alt="Risiko måler"/>
        </Col>
        <Col sm={{size: '9'}}>
          {this.props.riskText}
        </Col>
      </Row>
      <Row>
        {this.props.risks.map((r, _) => (
          <Risk title={r.title} level={r.level} description={r.description}/>
        ))}
      </Row>
    </Container>);
  }
}
