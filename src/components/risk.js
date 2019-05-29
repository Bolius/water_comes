import React, { Component } from 'react';
import { Container as BContainer, Row, Col, Collapse } from 'reactstrap';
import '../styles/risk.css'
import styled from 'styled-components';

const Container = styled(BContainer)`
  margin: 5px;
`;

const RiskTitle = styled(Row)`
  font-size: 1.1em;
  font-weight: 500;
`;

const RiskLevel = styled(Row)`
  color: #3C8EBC;
  font-weight: 500;
  font-size: 0.9em;
`;

const RiskDesc = styled(Col) `
  background-color: #EDF9FD;
`;


export default class Risk extends Component {
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
      <Container >
        <Row>
          <Col sx='6' sm={{size: '9'}}>
            <RiskLevel>
             {this.props.level} indflydelse
            </RiskLevel>
            <RiskTitle>
              {this.props.title}
            </RiskTitle>
          </Col>
          <Col sx='3' sm={{size: '3'}} className="plus-btn" onClick={this.toggle}>
            {this.state.collapse ? 'x' : '+'}
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <RiskDesc>
              {this.props.description}
            </RiskDesc>
          </Row>
        </Collapse>
      </Container>
    );
  }
}
