import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import styled from 'styled-components';

const RiskHeader = styled(Col)`
  font-size: 1.2em;
  font-weight: 600;
  background-color: #EFF9FD;
  padding: 0.8em;
`;

const RiskSummary = styled(Row)`
  padding: 1em;
  color: #3687B7;
  font-weight: 600;
  font-size: 1.2em;
  background-color: #D5EFF9;
  margin-top: 20px
`;

export default class RiskDescriber extends React.Component {
  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    return (
      <Container>
        <Col sm='12'>
          <RiskSummary>
            <Col sm='3'>
              <img src={riskImage} style={{height: '64px'}} className="img-fluid" alt="Risiko måler"/>
            </Col>
            <Col sm='9'>
              {this.props.riskText}
            </Col>
          </RiskSummary>
          </Col>
          <Col sm='12'>
          <Row>
            <RiskHeader>
              Faktorer, der påvirker boligens risiko ved {this.props.type}
            </RiskHeader>
          </Row>
          </Col>
    </Container>);
  }
}
