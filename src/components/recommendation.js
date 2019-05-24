import React from 'react';
import { Row, Col  } from 'reactstrap';
import '../styles/recom.css'

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="recom_box">
          <Row>
            <Col className="my-auto" sm="4">
              <img className="img-fluid rounded" src={ this.props.img } alt={ this.props.link }/>
            </Col>
            <Col sm="8" className="my-auto">
            <Row><h4>{ this.props.title }</h4></Row>
            <Row>{ this.props.caption.slice(0,60) }...</Row>
            <Row><a href={ this.props.link }>Læs mere her</a></Row>
            </Col>
          </Row>
      </div>
    );
  }
}
