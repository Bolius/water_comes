import React from 'react';
import { Button, Row, Col,  Container, Input } from 'reactstrap';
import '../styles/recom.css'

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="recom_box">
        <Col>
          <Row>
            <Col sm="4">
              <img class="crop" src={ this.props.img } alt=""/>
            </Col>
            <Col sm="8">
            <h4>{ this.props.title }</h4>
            <p> { this.props.caption } </p>
            <a href={ this.props.link }>Læs mere her</a>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
