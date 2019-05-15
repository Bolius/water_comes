import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import '../styles/about.css'


export default class About extends React.Component {
  render() {
    return (
      <Container className="about">
        <Row>
          <Col>
          {/* <Col sm={{size: '10', offset: 1 }}> */}
            <h5>Det handler siden om</h5>
          </Col>
        </Row>
        <Row>
            <Col>
{/* <Col sm={{size: '5', offset: 1 }}> */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit augue et lacus tincidunt, et efficitur purus dictum. Vivamus
            pellentesque ex nec ligula rutrum eleifend. Proin sagittis nulla ut
            mollis suscipit. Etiam in neque massa. Integer a turpis mauris. Ut
            nec ornare enim. Aenean non eleifend dui, ut venenatis leo. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </Col>
          {/* <Col sm={{size: '5'}}> */}
          <Col>
            Integer id mollis ante. Curabitur ultricies nulla
            aliquet mauris bibendum, at aliquet metus tempor. Suspendisse
            aliquam consequat turpis commodo laoreet. Pellentesque sed justo
            turpis. Nullam vel malesuada leo, et maximus nibh. Quisque ut nisl
            a mi iaculis pellentesque. Proin auctor tempus enim, ac mollis ipsum
            viverra tempus.
          </Col>
        </Row>
      </Container>
    );
  }
}
