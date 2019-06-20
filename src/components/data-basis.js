import React from "react";
import styled from "styled-components";
import { Container as BContainer, Row as BRow, Col } from "reactstrap";
import DataContent from "./data-content.js";
import "../styles/risk.css";

const Container = styled(BContainer)`
  margin: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #eff9fd;
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
        <Row onClick={this.toggle} style={{ cursor: "pointer" }}>
          <Col sx="6" sm={{ size: "9" }}>
            SE DATAGRUNDLAGET HER
          </Col>
          <Col sx="3" sm={{ size: "3" }} className="plus-btn">
            <div>{this.state.collapse ? "-" : "+"}</div>
          </Col>
        </Row>
        {this.state.collapse ? <DataContent /> : ""}
      </Container>
    );
  }
}
