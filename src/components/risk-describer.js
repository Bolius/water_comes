import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import styled from 'styled-components';
import Risk from './risk.js'
import Risks from '../risks.json'


const RiskHeader = styled(Col)`
  font-size: 1.2em;
  font-weight: 600;
  background-color: #EFF9FD;
  padding: 0.8em;
  marginBottom: 5px;
`;

const RiskSummary = styled(Row)`
  padding: 1em;
  color: #3687B7;
  font-weight: 600;
  font-size: 1.2em;
  background-color: #D5EFF9;
  margin-top: 20px;
  /* text-align: center; */
`;

export default class RiskDescriber extends React.Component {
  // {this.props.dangers..map((risk, i) => (
  //   <Risk key={i} title={risk.lowRisk} description={risk.description}/>
  // ))}
  getRisks(type){
    console.log(Risks['lavning'])
    return this.props.dangers[type].map((id, i) =>(
      <Risk key={i} title={Risks[id][type]} description={Risks[id].description}/>
    ))
  }

  render() {
    const riskImage = require(`../assets/gauges/risk-${this.props.risk}.png`)
    return (
      <Container>
        <Col sm='12'>
          <RiskSummary>
            <Col className="my-auto text-center" xs={12} >
              <h2 style={{marginTop: "-40px", color:"black"}}>Skybrud</h2>
            </Col>
            <Col className="my-auto text-center" xs={12} >
                <img src={riskImage} style={{height: '64px'}} className="img-fluid" alt="Risiko måler"/>
            </Col>
            <Col className="my-auto text-center" xs={12} >
              {this.props.riskText}
            </Col>
          </RiskSummary>
          </Col>
          <Col sm='12'>
          <Row style={{marginBottom: "5px"}}>
            <RiskHeader>
              Faktorer, der påvirker boligens risiko ved {this.props.type}
            </RiskHeader>
          </Row>
            <Row>
            {this.getRisks('high')}
            {this.getRisks('medium')}
            {this.getRisks('low')}
            </Row>
          </Col>
    </Container>);
  }
}
