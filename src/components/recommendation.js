import React from 'react';
import { Row, Col, Container as BContainer } from 'reactstrap';
import styled from 'styled-components';

const Container = styled(BContainer)`
  background-color: #FFFFFF;
  margin:auto;
  padding: 10px;
  height: 100%;
`;

export default class Recommendation extends React.Component {
  render() {
    return (
      <Container>
        <Row>
            <Col xs="12" sm="4">
              <img className="img-fluid rounded" src={ this.props.img } alt={ this.props.link }/>
            </Col>
            <Col xs='12' sm="8" style={{ paddingRight : 30, paddingLeft : 30, marginTop: 10 }} >
            <Row><p style={{ fontSize : '15px' , fontWeight : 'bold'}}>{ this.props.title }</p></Row>
            <Row>{ this.props.caption.slice(0,60) }...</Row>
            <Row><a href={ this.props.link }>Læs mere her</a></Row>
            </Col>
        </Row>
      </Container>
    );
  }
}
