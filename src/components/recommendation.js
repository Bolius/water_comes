import React from 'react';
import { Row, Col  } from 'reactstrap';
import '../styles/recom.css'

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="recom_box">
        <Col>
          <Row>
            <Col sm="4">
              <img className="crop" src={ this.props.img } alt={ this.props.link }/>
            </Col>
            <Col sm="8">
            <h4>{ this.props.title }</h4>
            <p> { this.props.caption.slice(0,60) }...</p>
            <a href={ this.props.link }>Læs mere her</a>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
