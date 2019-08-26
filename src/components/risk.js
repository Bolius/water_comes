import React, { Component } from 'react';
import { Container as BContainer, Row, Col } from 'reactstrap';
import '../styles/risk.css'
import styled from 'styled-components';

const Container = styled(BContainer)`
  background-color: #EDF9FD;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const RiskTitle = styled(Row)`
  font-size: 1.2em;
  font-weight: 300;
  padding-left: 10px;
`;


export default class Risk extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { showDescription: false };
  }

  toggle() {
    this.setState(state => ({ showDescription: !state.showDescription }));
  }

  render() {
    var base64String = "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"

    var t = "data:image/png;base64,"
    console.log(this.props.id)
    return (
      <Container >
        <Row className="my-auto">
          <Col className="my-auto" sx='6' sm={{size: '9'}}>
            <RiskTitle>
              {this.props.title}
            </RiskTitle>
          </Col>
          <Col sx='3' sm={{size: '3'}} className="plus-btn my-auto" onClick={this.toggle}>
            <div style={{cursor: "pointer"}}>{this.state.showDescription ? '-': '+'}</div>
          </Col>
        </Row>
        {this.state.showDescription ?
            <Row>
              <Col>
                {this.props.description}
                <br/>
                {
                  this.props.id === 'lavning' ? <img src={t.concat(base64String)}/> : ""
                }


              </Col>
            </Row>
          : ''
          }

      </Container>
    );
  }
}
