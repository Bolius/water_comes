import React from 'react';
import { Row, Col } from 'reactstrap'


export default class About extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h5>Det handler siden om</h5>
          </Col>
        </Row>
        <Row>
            <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit augue et lacus tincidunt, et efficitur purus dictum. Vivamus
            pellentesque ex nec ligula rutrum eleifend. Proin sagittis nulla ut
            mollis suscipit. Etiam in neque massa. Integer a turpis mauris. Ut
            nec ornare enim. Aenean non eleifend dui, ut venenatis leo. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </Col>
          <Col>
            Integer id mollis ante. Curabitur ultricies nulla
            aliquet mauris bibendum, at aliquet metus tempor. Suspendisse
            aliquam consequat turpis commodo laoreet. Pellentesque sed justo
            turpis. Nullam vel malesuada leo, et maximus nibh. Quisque ut nisl
            a mi iaculis pellentesque. Proin auctor tempus enim, ac mollis ipsum
            viverra tempus.
          </Col>
        </Row>
      </div>
    );
  }
}
