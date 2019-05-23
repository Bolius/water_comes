import React, { Component } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import '../styles/risk.css'
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
      <Container className="risk">
        <Row>
          <Col  sm={{size: '10'}}>
            <Row className="risk-level">
             {this.props.level} indflydelse
            </Row>
            <Row className="risk-title">
              {this.props.title}
            </Row>
          </Col>
          <Col  sm={{size: '2'}} className="plus-btn" onClick={this.toggle}>
            {this.state.collapse ? 'x' : '+'}
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col className="risk-desc">
              {this.props.description}
            </Col>
          </Row>
        </Collapse>
      </Container>
    );
  }
}
