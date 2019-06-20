import React, { Component } from "react";
import { Container as BContainer, Row, Col } from "reactstrap";
import "../styles/risk.css";
import styled from "styled-components";

const Container = styled(BContainer)`
  background-color: #edf9fd;
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
    return (
      <Container>
        <Row className="my-auto">
          <Col className="my-auto" sx="6" sm={{ size: "9" }}>
            <RiskTitle style={{ cursor: "pointer" }} onClick={this.toggle}>
              {this.props.title}
            </RiskTitle>
          </Col>
          <Col sx="3" sm={{ size: "3" }} className="plus-btn my-auto">
            <div>{this.state.showDescription ? "-" : "+"}</div>
          </Col>
        </Row>
        {this.state.showDescription ? (
          <Row>
            <Col>{this.props.description}</Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
    );
  }
}
