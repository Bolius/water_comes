import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/action.css'

export default class Action extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, recomShown: false};
  }

  toggle() {
    if(this.state.recomShown){
      this.setState(state => ({ collapse: !state.collapse}));
      this.props.setKey(this.props.keyId)
      this.props.handleChange()
    }
    else{
      this.setState(state => ({ collapse: !state.collapse, recomShown: true}));
      this.props.setKey(this.props.keyId)
    }

  }

  render() {
    return (
      <Row className="task">
        <Col xs={{size:'1'}} sm={{size: '1', offset: 1}}>
        <label>
          <input type="checkbox" onClick={this.toggle}/>
          <span className="checkmark"></span>
        </label>
        </Col>
        <Col xs={{size:'8'}} sm={{size: '10'}} className="task-text">
          {this.props.task}
        </Col>
      </Row>
    );
  }
}
