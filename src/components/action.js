import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/action.css'

export default class Action extends Component {
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
      <Row className="task">
        <Col sm={{size: '1', offset: 1}}>
        <label>
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>
        </Col>
        <Col sm={{size: '10'}} className="task-text">
          {this.props.task}
        </Col>
      </Row>
    );
  }
}
