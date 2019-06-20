import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/risk.css";

const ContainerStyle = {
  backgroundColor: "#edf9fd",
  marginBottom: "5px",
  marginTop: "5px"
};

const RiskTitle = {
  fontSize: "1.2em",
  fontweight: "300",
  paddingLeft: "10px"
};

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
      <Container style={ContainerStyle}>
        <Row
          className="my-auto"
          style={{ cursor: "pointer" }}
          onClick={this.toggle}
        >
          <Col className="my-auto" sx="6" sm={{ size: "9" }}>
            <row style={RiskTitle}>{this.props.title}</row>
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
